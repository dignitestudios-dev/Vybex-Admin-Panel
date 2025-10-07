import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const HorizontalBarChart = ({ horizontalData }) => {
 console.log(horizontalData)
 const weeklyData = horizontalData?.[0]?.count || { free: 0, paid: 0 }
  const paidValue = weeklyData.paid;
  const freeValue = weeklyData.free;
  console.log(weeklyData)
  const data = {
    labels: ["Paid Live","Free Live",], // 2 alag categories
    datasets: [
      

      {
        label: "Paid Live",
        data: [paidValue,null], // sirf doosri category ke liye value
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            chartArea.left,
            chartArea.top,
            chartArea.right,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(91,12,38,1)");
          gradient.addColorStop(1, "rgba(31,9,108,1)");
          return gradient;
        },
        borderRadius: { topRight: 15, bottomRight: 15 },
        barThickness: 40,
      },



      {
        label: "Free Live",
        data: [null,freeValue], // sirf pehle category ke liye value
        backgroundColor: "rgba(0,0,254,1)",
        borderRadius: { topRight: 15, bottomRight: 15 }, // sirf right side round
        barThickness: 40,
      },
    
    ],
  };
  
  const options = {
    indexAxis: "y", // horizontal bars
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          usePointStyle: true ,
          color: "#ffffff",
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: "#ffffff", // 👈 Y axis numbers bhi white kar diye
        },
      },
      
      y: {
        beginAtZero: true,
        // <-- bar gap control
        barPercentage: 0.6, // bar thickness relative
        categoryPercentage: 0.6,
        ticks: {
          color: "#ffffff", // 👈 Y axis numbers bhi white kar diye
        }, // gap between bars
      },
    },
  };
  return (
   <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[1px] rounded-[15px]">
     <div className="bg-[#000000]  backdrop-blur-[50px] p-5 h-[350px] relative w-full rounded-[15px] ">
      <h3 className="font-[700] text-[15px] text-white  absolute top-8 ">
      Bookings
      </h3>

      {/* <div
        name=""
        id=""
        className="bg-transparent text-[#ffffff] outline-none absolute top-8 right-7 text-[12px] font-[400]"
      >
        This Week

      </div> */}

      <Bar
        data={data}
        options={options}
        className="!w-full"
        plugins={[
          {
            id: "increase-legend-spacing",
            beforeInit(chart) {
              const originalFit = chart.legend.fit;
              chart.legend.fit = function () {
                originalFit.bind(chart.legend)();
                this.height += 40;
              };
            },
          },
        ]}
      />
      
    </div>
   </div>
  );
};

export default HorizontalBarChart;
