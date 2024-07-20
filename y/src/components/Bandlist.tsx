import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

type Props = {
  socket: Socket
}

export const Bandlist = ({socket}:Props) => {


  const [bands, setbands] = useState<
    { name: string; vote: number; id: number }[]
  >([]);

  const addVote = (id: number) => {
    socket.emit("addVote", id);
  };

  const deleteBand = (id: number) => {
    socket.emit("deleteBand", id);
  };

  const changeNameBand = (id: number, name: string) => {
    socket.emit("changeName", { id, name });
  };

        
  useEffect(() => {
    socket.on("bands", (res) => {

      setbands(res)
    })
  })




  return (
    <div className="flex flex-col justify-start w-[50%]">
      <h2 className="font-bold text-4xl mb-8">Lista de bandas</h2>
      <ul className="h-[250px] transition-all duration-1000 gap-4 flex flex-col">
        {bands.map((band) => (
          <li key={band.id} className="flex items-center">
            <button
              className="text-white bg-sky-400 px-8 py-4 active:bg-sky-800"
              onClick={() => addVote(band.id)}
            >
              {band.vote} +
            </button>
            <input
              type="text"
              className="border-[1px] border-solid border-black py-4 px-8"
              value={band.name}
              onChange={(e) => {
                setbands((old) =>
                  old.map((oldBand) => {
                    if (oldBand.id == band.id) {
                      return { ...band, name: e.target.value };
                    } else {
                      return oldBand;
                    }
                  })
                );
              }}
              onBlur={(e) => changeNameBand(band.id, e.target.value)}
            />
            <button
              className="bg-red-400 text-white px-8 py-4"
              onClick={() => deleteBand(band.id)}
            >
              deletes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
