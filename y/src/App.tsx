import { useContext } from "react"
import { Bandlist } from "./components/Bandlist"
import { FormBand } from "./components/FormBand"
import { SocketContext } from "./providers/SocketProvider"
import ChartBand from "./components/ChartBand"





function App() {

  const {socket} = useContext(SocketContext)
 
  return (
    <div className="flex flex-col items-center gap-8">
    <div>
    <ChartBand socket={socket}/>
    </div>
     <div className='flex justify-center items-center  gap-24'>
       <Bandlist socket={socket}/>
       <FormBand socket={socket}/>
     </div>
    </div>
  )
}

export default App
