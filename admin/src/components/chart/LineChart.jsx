import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./chart.css";

const LineChart = ({ userData, title, dataKey, grid }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) chartInstance.current.destroy();
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: userData.map((row) => row.name),
        datasets: [
          {
            label: title,
            data: userData.map((row) => row[dataKey]),
            fill: false,
            borderColor: "rgb(75,192,192)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        aspectRatio: 4 / 1,
        // grid &&
        scales: grid
          ? {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
              },
            }
          : {},
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <canvas className="chart-canvas" aspect="true" ref={chartRef} />
    </div>
  );
};

export default LineChart;
