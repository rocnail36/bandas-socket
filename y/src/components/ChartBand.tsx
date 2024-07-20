import {Bar} from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController,
 Colors
} from 'chart.js';
import { Socket } from "socket.io-client";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController,
 Colors
);


type Props = {
    socket: Socket
}

const ChartBand = ({socket}:Props) => {


  const [bands, setbands] = useState<
  { name: string; vote: number; id: number }[]
>([]);



useEffect(() => {
  socket.on("bands", (res) => {
    setbands(res)
    console.log("gola")
  })
},[bands])

  

  return (
    <div className="w-[600px]">
      <Bar data={{
      labels: bands?.map(band => band.name),
      datasets: [{
        label: 'Bandas',
        data: bands?.map(band => band.vote),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
            borderWidth: 1
      }]
    }} options={{
      indexAxis: 'y',
    }
  } className="w-[400px] h-[400px]"></Bar>
    </div>
  )
}



export default ChartBand