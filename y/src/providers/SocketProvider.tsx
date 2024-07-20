import React,{ createContext } from "react";
import { io, Socket } from "socket.io-client";

type props = {
    socket: Socket
}

export const SocketContext = createContext<props>({} as props)


type Props = {
    children: React.ReactNode
}

const SockectProvider = ({children}:Props) => {

   
const socket = io("http://localhost:8080")


    return(
        <SocketContext.Provider 
        value={{
            socket: socket
        }}>

        {children}

        </SocketContext.Provider>
    )



}


export default SockectProvider