import React from "react";
import {
  Table as MaterialTable,
  TableBody,
  TableCell as MaterialTableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  IconButton,
  Box,
} from "@material-ui/core";
import _ from "lodash";
import BellsIcon from "../BellBagIcon/BellsIcon";
import { Predictor } from "../../utils/predictor";

const prices = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];

function GetPredictionPrices(props) {
  if (
    props.firstBuy == null ||
    props.previousPattern == -2 ||
    isNaN(props.prices[0]) ||
    isNaN(props.prices[1]) ||
    isNaN(props.prices[2])
  ) {
    return <div>Prices not ready yet</div>;
  }
  let pat_desc = {
    0: "fluctuating",
    1: "large-spike",
    2: "decreasing",
    3: "small-spike",
    4: "all",
  };
  let newPrices = [props.sundayPrice, props.sundayPrice, ...props.prices];
  let predict = new Predictor(newPrices, props.firstBuy, props.previousPattern);
  console.log("From prediction function this is first buy: " + props.firstBuy);
  console.log(
    "From prediction function this is previous pattern: " +
      props.previousPattern
  );
  let results = predict.analyze_possibilities();
  return (
    <table>
      <tbody>
        {results.map((res, i) => (
          <tr key={i}>
            {res.prices.slice(2).map((day, i) => (
              <tr key={i}>
                <td>{day.min}</td>
                <td>{day.max}</td>
              </tr>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class Predictions extends React.Component {
  constructor(props) {
    super(props);
    this.handleFirstBuyChange = this.handleFirstBuyChange.bind(this);
    this.handlePreviousPatternChange = this.handlePreviousPatternChange.bind(
      this
    );
    this.handlePricesChange = this.handlePricesChange.bind(this);
    this.handleSundayPriceChange = this.handleSundayPriceChange.bind(this);
    this.state = {
      firstBuy: null,
      previousPattern: -2,
      prices,
      sundayPrice: NaN,
    };
  }

  // componentDidMount = () => {
  //   const localFirstBuy =
  //     localStorage.getItem("firstBuy") || this.state.firstBuy;
  //   this.setState({ firstBuy: localFirstBuy });
  // };

  onClearPrices = () => {
    this.setState({ prices });
  };

  handleFirstBuyChange(e) {
    const isFirstBuy = e.currentTarget.value === "true" ? true : false;
    this.setState({ firstBuy: isFirstBuy });
    // this.setState({ firstBuy: localStorage.getItem("firstBuy") });
  }

  handlePreviousPatternChange(e) {
    console.log("pattern " + e.currentTarget.value);
    if (e.currentTarget.value == "-1") {
      this.setState({ previousPattern: -1 });
    } else if (e.currentTarget.value == "0") {
      this.setState({ previousPattern: 0 });
    } else if (e.currentTarget.value == "3") {
      this.setState({ previousPattern: 3 });
    } else if (e.currentTarget.value == "1") {
      this.setState({ previousPattern: 1 });
    } else {
      this.setState({ previousPattern: 2 });
    }
  }

  handlePricesChange(newPrice, i) {
    const { prices } = this.state;
    const newPrices = [...prices];
    newPrices[i] = newPrice;
    this.setState({ prices: newPrices });
  }

  handleSundayPriceChange(newSundayPrice) {
    this.setState({ sundayPrice: newSundayPrice });
  }

  render() {
    const firstBuy = this.state.firstBuy;
    const previousPattern = this.state.previousPattern;
    const sundayPrice = this.state.sundayPrice;
    const { prices } = this.state;
    console.log("is first buy: " + firstBuy);
    console.log("These are prices" + prices);
    return (
      <div>
        <div>
          <h1>Is this your first buy?</h1>
          <label>
            <input
              type="radio"
              value="true"
              checked={firstBuy == true}
              onChange={this.handleFirstBuyChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="false"
              checked={firstBuy == false}
              onChange={this.handleFirstBuyChange}
            />
            No
          </label>
        </div>
        <div>
          <h1>What was last week's turnip pattern?</h1>
          <label>
            <input
              type="radio"
              value="-1"
              checked={previousPattern === -1}
              onChange={this.handlePreviousPatternChange}
            />
            I don't know
          </label>
          <label>
            <input
              type="radio"
              value="0"
              checked={previousPattern === 0}
              onChange={this.handlePreviousPatternChange}
            />
            Fluctuating
          </label>
          <label>
            <input
              type="radio"
              value="3"
              checked={previousPattern === 3}
              onChange={this.handlePreviousPatternChange}
            />
            Small spike
          </label>
          <label>
            <input
              type="radio"
              value="1"
              checked={previousPattern === 1}
              onChange={this.handlePreviousPatternChange}
            />
            Large spike
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={previousPattern === 2}
              onChange={this.handlePreviousPatternChange}
            />
            Decreasing
          </label>
        </div>
        <div>
          <h1>Prices</h1>
          <p>Sunday</p>
          <input
            type="number"
            value={sundayPrice}
            onChange={(e) => this.handleSundayPriceChange(e.target.value)}
          />
          <p>Monday - Saturday</p>
          {prices.map((item, i) => (
            // <TextField
            //   key={i}
            //   type="number"
            //   value={item}
            //   onChange={(e) => this.handlePricesChange(e.target.value, i)}
            // />
            <input
              type="number"
              key={i}
              value={item}
              onChange={(e) => this.handlePricesChange(e.target.value, i)}
            />
          ))}
        </div>
        <div>
          <GetPredictionPrices
            firstBuy={firstBuy}
            previousPattern={previousPattern}
            prices={prices}
            sundayPrice={sundayPrice}
          />
        </div>
      </div>
    );
  }
}

export default Predictions;
