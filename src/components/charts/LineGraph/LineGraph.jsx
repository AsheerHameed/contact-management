import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import './line.css'
Chart.register({
  id: "category",
  type: "category",
  ticks: {
    display: false,
  },
});

function LineGraph() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const chartData = {
    labels: data && data.cases ? Object.keys(data.cases) : [],
    datasets: [
      {
        label: "Cases",
        data:
          data &&
          data.cases &&
          Object.values(data.cases).map((val) => {
            return val ? val : 0;
          }),
        fill: false,
        borderColor: "#4caf50",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
      },
    },
  };

  return (
    <div className="line-graph-container" style={{ width: "100%" }}>
      <h2>A line graph showing the cases fluctuations</h2>
      <Line style={{"cursor":"pointer"}}data={chartData} options={options} />
    </div>
  );
}

export default LineGraph;
