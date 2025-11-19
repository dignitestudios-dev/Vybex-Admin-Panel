import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { calender } from "../../../assets/export";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export function LineGraph({ lineGraphData, setStartDate, setEndDate }) {

  const counts = lineGraphData?.map((item) => item.count) || [];

  const data = {
    labels,
    datasets: [
      {
        label: "Previous Year",
        borderColor: "rgba(0, 0, 254, 1)",
        pointBackgroundColor: "rgba(0, 0, 254, 1)",
        data: counts,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // ⭐⭐ FIXED Y-AXIS VALUES (0–40, STEP 5) ⭐⭐
  const options = {
   responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  layout: {
    padding: {
      top: 10, // chart ke upar extra space; adjust karo 20-40 px
    },
  },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        beginAtZero: true,
        min: 0,          // ⭐ Start at 0
        max: 40,         // ⭐ End at 40
        ticks: {
          stepSize: 5,   // ⭐ 0,5,10...40
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          usePointStyle: true,
          color: "#ffffff",
        },
        padding: {
    top: 20,
    bottom: 20,
       // ⭐ legend ko aur upar push kar diya
  },
      },
      title: {
        display: true,
        color: "#ffffff",
      },
    },
  };

  

  return (
    <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-5 h-full relative rounded-[15px]">
      <div className="flex justify-between items-center">
        <p className="text-white text-[23.26px] font-[600]">
          Active Users Overview
        </p>

     
      </div>

      {/* Graph */}
      <div className="w-full h-[350px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
