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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

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

export function LineGraph({ dGraphData, year, setYear }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Selected Year",

        borderColor: "rgba(199, 26, 30, 1)", // line color
        pointBackgroundColor: "rgba(199, 26, 30, 1)", // points ka color
        data: [12, 19, 7, 15, 22, 30, 18], // <---- yahan tumhara actual data
        tension: 0.4,
        fill: true,
      },
      {
        label: "Previous Year",
        borderColor: "rgba(0, 0, 254, 1)", // line color
        pointBackgroundColor: "rgba(0, 0, 254, 1)", // points ka color
        data: [12, 19, 7, 15, 22, 30, 18], // <---- yahan tumhara actual data
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
          color: "#ffffff", // 👈 months white
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "#ffffff", // 👈 Y axis numbers bhi white kar diye
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          color: "#ffffff", // 👈 legend labels bhi white
        },
      },
      title: {
        display: true,
        color: "#ffffff", // 👈 agar title use ho raha ho
      },
    },
  };

  return (
    <div className="bg-[#000000] mt-3 backdrop-blur-[50px]   p-5 h-full relative rounded-[15px]  ">
      <div className="flex justify-between items-center  ">
        <p className="text-white text-[23.26px] font-[600]">
          Active Users Overview
        </p>
        <div className="flex items-center gap-2 ">
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[1px] rounded-[10px] ">
            <button className="text-white text-[11.63px] font-[500] flex items-center justify-between w-[148px] h-[34px] bg-[#000000]  rounded-[10px] p-2 ">
              Dec, 15 2025{" "}
              <span>
                <img src={calender} alt="" className="w-4" />
              </span>
            </button>
          </div>
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[1px] rounded-[10px] ">
            <button className="text-white text-[11.63px] font-[500] flex items-center justify-between w-[148px] h-[34px] bg-[#000000]  rounded-[10px] p-2 ">
              Dec, 15 2025{" "}
              <span>
                <img src={calender} alt="" className="w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[350px]">
        <Line
          options={options}
          data={data}
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
}
