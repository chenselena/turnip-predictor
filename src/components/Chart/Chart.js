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

  return <div className="number-input-styles">{results[0]}</div>;
}

export default Chart;
