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

const labels = ["January", "February", "March", "April", "May", "June", "July" , "August", "September", "October", "November", "December"];

const generateRandomData = (min, max, length) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const createGradient = (ctx, color1, color2) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 700);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(0.38, color2);
  return gradient;
};
export function LineGraph({ lineGraphData, setStartDate, setEndDate }) {
  console.log(lineGraphData, "lineGraphData");

  // Convert your object array into labels and data
  // const labels = lineGraphData.map((item) => item.date); // x-axis = dates
  // const counts = lineGraphData.map((item) => item.count); // y-axis = counts
  const counts = lineGraphData?.map((item) => item.count) || [];
  const data = {
    labels,
    datasets: [
      {
        label: "Previous Year",
        borderColor: "rgba(0, 0, 254, 1)", // line color
        pointBackgroundColor: "rgba(0, 0, 254, 1)", // points color
        data: counts, // 👈 only numbers
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          color: "#ffffff",
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
        <div className="flex items-center gap-2">
          {/* Start Date */}
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[1px] rounded-[10px]">
            <div className="text-white text-[11.63px] font-[500] flex items-center justify-between w-[148px] h-[34px] bg-[#000000] rounded-[10px] p-2">
              <input
                type="date"
                className="bg-transparent"
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span>
                <img src={calender} alt="" className="w-4" />
              </span>
            </div>
          </div>

          {/* End Date */}
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[1px] rounded-[10px]">
            <div className="text-white text-[11.63px] font-[500] flex items-center justify-between w-[148px] h-[34px] bg-[#000000] rounded-[10px] p-2">
              <input
                type="date"
                className="bg-transparent"
                onChange={(e) => setEndDate(e.target.value)}
              />
              <span>
                <img src={calender} alt="" className="w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="w-full h-[350px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}



