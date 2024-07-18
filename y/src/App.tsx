import { useEffect, useState } from 'react'
import { io, Socket } from "socket.io-client";

const socket = io("http://localhost:8080")

const addVote = (id:number) => {
   socket.emit("addVote",id)  
}

const deleteBand = (id:number) => {
  socket.emit("deleteBand",id)
}

const changeNameBand  = (id:number, name:string) => {
    socket.emit("changeName", {id,name})
}

function App() {

  const [bands, setbands] = useState<{name:string,vote:number,id:number}[]>([])
  
  
  useEffect(() => {
    socket.on("bands", (res) => {
      setbands(res.data)
    })
  })

  useEffect(() => {
    socket.on("addVoteToClient",(data) => {
      setbands(data)
    })
  },[])

  useEffect(() => {
    socket.on("deleteBandToClient",(data) => {
      setbands(data)
    })
  },[])


  useEffect(() => {
    socket.on("changeNameToClient",(data) => {
      console.log(data)
      setbands(data)
    })
  },[])
  


  return (
    <>
     <div className='flex justify-center items-center h-[100vh] gap-24'>
         <div className='flex flex-col justify-start w-[50%]'>
          <h2 className='font-bold text-4xl mb-8'>Lista de bandas</h2>
          <ul className='h-[250px] transition-all duration-1000 gap-4 flex flex-col'>
            {bands.map(band => (
              <li key={band.id} className='flex items-center'>
              <button className='text-white bg-sky-400 px-8 py-4 active:bg-sky-800'
              onClick={() =>  addVote(band.id)}>{band.vote} +</button>
              <input type="text"
              className='border-[1px] border-solid border-black py-4 px-8'
              value={band.name}
              onChange={(e) => {
                setbands(old => old.map(oldBand => {
                  if(oldBand.id == band.id){
                    return {...band,name:e.target.value}
                  }else{
                    return oldBand
                  }
                }))
              }}
              onBlur={(e) => changeNameBand(band.id,e.target.value)}
              />
              <button 
              className='bg-red-400 text-white px-8 py-4'
              onClick={() => deleteBand(band.id)}>deletes</button>
              </li>
            ))}
          </ul>

         </div>
         <div>
            <form className='flex flex-col gap-8'>
                <input type="text" 
                className='border-[1px] border-solid border-black py-4 px-8' />
              <button className='text-white bg-sky-400 px-8 py-4 self-start'>crear banda</button>
            </form>
         </div>
     </div>
    </>
  )
}

export default App
