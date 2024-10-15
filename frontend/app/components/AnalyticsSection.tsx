"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const [data, setData] = useState<
    Array<{ ViewIp: string; Count: number; ViewDate: string }>
  >([]);


  async function handleGetAnalytics() {
    try {
        toast("Loading...")
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/analytics?shortUrl=${text}`
      );
      if (response.data.success) {
        const feedback = response.data.data.clicks.reduce(
          (
            acc: Record<string, { count: number; viewDate: string }>,
            item: { ViewIp: string; ViewDate: string }
          ) => {
            const fieldValue = item.ViewIp;
            if (acc[fieldValue]) {
              acc[fieldValue].count++;
            } else {
              acc[fieldValue] = { count: 1, viewDate: item.ViewDate }; 
            }
            return acc;
          },
          {}
        );

        const resultArray: Array<{ ViewIp: string; Count: number; ViewDate: string }> = Object.keys(
          feedback
        ).map((key) => ({
          ViewIp: key,
          Count: feedback[key].count,
          ViewDate: feedback[key].viewDate,
        }));

        setData(resultArray);
        toast.success("Analytics fetched Successfully");
     }
    } catch (error) {
      toast.error("The url was not found");
      console.error(error);
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      handleGetAnalytics();
    }
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-grow mt-48 items-center text-center flex-col">
      <div
        className={`${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } transition-all duration-1000 ease-in-out text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-white`}
        style={{
          fontFamily: `"Inter var", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        }}
      >
        View Your Analytics
      </div>
      <div
        className={`${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } transition-all duration-1000 ease-in-out mt-20 max-w-96 flex justify-center`}
      >
        {!data.length ? (
          <input
            type="text"
            placeholder="Paste Your Link Here"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-12 w-96 border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-4 py-3 text-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(16,185,129)] focus:ring-opacity-50"
          />
        ) : (<div className="flex justify-start min-w-full">
          <Line
            className="w-[800px] h-[800px]"
            data={{
              labels: data.map((item) => item.ViewIp), 
              datasets: [
                {
                  label: "No. of requests from various IPs",
                  data: data.map((item) => item.Count), 
                  fill: false,
                  borderWidth: 2,
                  backgroundColor: "rgb(255,255,255)",
                  borderColor: "white",
                },
              ],
            }}
          /></div>
        )}

        {!data.length ? (
          <button
            onClick={handleGetAnalytics}
            className="inline-flex h-12 animate-shimmer items-center justify-center ml-4 rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Submit
          </button>
        ) : null}
        
      </div>
      {data.length ? (
          <table className="w-[200px]  rounded-xl border-collapse border border-gray-300 mt-9">
            <thead>
              <tr>
                <th className="bg-white text-black p-4 border-b border-gray-300">IP Address</th>
                <th className="bg-white text-black p-4 border-b border-gray-300">Count</th>
                <th className="bg-white text-black p-4 border-b border-gray-300">View Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="bg-black text-white p-4 border-b border-gray-300">{item.ViewIp}</td>
                  <td className="bg-black text-white p-4 border-b border-gray-300">{item.Count}</td>
                  <td className="bg-black text-white p-4 border-b border-gray-300">{item.ViewDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
    </div>
  );
};

export default AnalyticsSection;
