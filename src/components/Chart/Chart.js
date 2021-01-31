import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { Predictor } from "../../utils/predictor";
function Chart() {
  let pat_desc = {
    0: "fluctuating",
    1: "large-spike",
    2: "decreasing",
    3: "small-spike",
    4: "all",
  };
  let prices = [99, 100, 86];
  let predict = new Predictor(prices, false, 0);
  let results = predict.analyze_possibilities();
  for (let res of results) {
    for (let day of res.prices.slice(2)) {
      console.log("Day min: " + day.min);
      console.log("Day max: " + day.max);
    }
    console.log("guaranteed min" + res.weekGuaranteedMinimum);
    console.log("week max: " + res.weekMax);
  }

  return (
    <div className="number-input-styles">
      {/* {results.map((res, i) => (
        <Box>{res[i].prices.slice(2)}</Box>
      ))} */}
      hi
    </div>
  );
}

export default Chart;
