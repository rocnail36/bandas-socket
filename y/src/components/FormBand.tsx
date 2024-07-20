import React, {  useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'

type Props = {
  socket: Socket
}

export const FormBand = ({socket}:Props) => {


    const [form, setform] = useState("")

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        socket.emit("createBand", form)
    }


   





  return (
    <div>
    <form className='flex flex-col gap-8' onSubmit={(e) => onSubmit(e)}>
        <input type="text"
        name='input'
        id='input' 
        value={form}
        onChange={(e) =>  setform(e.target.value)}
        className='border-[1px] border-solid border-black py-4 px-8' />
      <button className='text-white bg-sky-400 px-8 py-4 self-start'>crear banda</button>
    </form>
 </div>
  )
}
