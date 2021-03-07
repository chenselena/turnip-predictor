import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const PriceChart = (props) => {
  let pat_desc = {
    0: "fluctuating",
    1: "large-spike",
    2: "decreasing",
    3: "small-spike",
    4: "all",
  };

  let minArray = [];
  if (props.results != undefined || props.results != null) {
    props.results.map((res, i) => {
      if (pat_desc[res.pattern_number] == "all")
        minArray.push(res.prices.slice(2).map((day) => day.min));
    });
  }
  let pricesMin = minArray[0];

  let maxArray = [];
  if (props.results != undefined || props.results != null) {
    props.results.map((res, i) => {
      if (pat_desc[res.pattern_number] == "all")
        maxArray.push(res.prices.slice(2).map((day) => day.max));
    });
  }
  let pricesMax = maxArray[0];

  const [dataChart, setDataChart] = useState({});

  useEffect(() => {
    setDataChart({
      labels: [
        "Mon AM",
        "Mon PM",
        "Tues AM",
        "Tues PM",
        "Weds AM",
        "Weds PM",
        "Thurs AM",
        "Thurs PM",
        "Fri AM",
        "Fri PM",
        "Sat AM",
        "Sat PM",
      ],
      datasets: [
        {
          label: "Prices min",
          data: pricesMin,
          fill: "+1",
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
        },
        {
          label: "Prices Max",
          data: pricesMax,
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
        },
      ],
    });
  }, [pricesMax, pricesMin]);

  return (
    <div>
      <Line data={dataChart} />
    </div>
  );
};

export default PriceChart;
