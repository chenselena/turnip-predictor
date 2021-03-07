import React from "react";
import _ from "lodash";
import PriceChart from "../Chart/Chart";
import BellsIcon from "../BellBagIcon/BellsIcon";

import { Predictor } from "../../utils/predictor";

import "./Predictions.css";

const prices = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];

const displayPercentage = function (fraction) {
  if (Number.isFinite(fraction)) {
    let percent = fraction * 100;
    if (percent >= 1) {
      return percent.toPrecision(3) + "%";
    } else if (percent >= 0.01) {
      return percent.toFixed(2) + "%";
    } else {
      return "<0.01%";
    }
  } else {
    return "—";
  }
};

function GetPredictionPrices(props) {
  if (
    props.firstBuy == null ||
    props.previousPattern == -2 ||
    isNaN(props.prices[0]) ||
    isNaN(props.prices[1])
  ) {
    return (
      <div>
        We don't have enough information to calculate your prices yet. Come back
        with your prices in the afternoon!
      </div>
    );
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

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <div
        style={{
          width: "80%",
        }}
      >
        <PriceChart results={results} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Pattern</th>
            <th>% Chance</th>
            {weekdays.map((day) => (
              <th colSpan={2}>
                <div>{day}</div>
                <span>AM</span>
                <span>PM</span>
              </th>
            ))}
            <th>Guaranteed Minimum</th>
            <th>Potential Maximum</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, i) => (
            <tr key={i}>
              <td>{pat_desc[res.pattern_number]}</td>
              <td>{displayPercentage(res.category_total_probability)}</td>
              {res.prices.slice(2).map((day) =>
                day.min == day.max ? (
                  <td>{day.min}</td>
                ) : (
                  <td>
                    {day.min} to {day.max}
                  </td>
                )
              )}
              <td>{res.weekGuaranteedMinimum}</td>
              <td>{res.weekMax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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

  onClearPrices = () => {
    this.setState({ prices });
  };

  handleFirstBuyChange(e) {
    const isFirstBuy = e.currentTarget.value === "true" ? true : false;
    this.setState({ firstBuy: isFirstBuy });
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
      <div className="prediction-container">
        <div className="first-buy-buttons">
          <h1>Is this your first time buying turnips?</h1>
          <div>This will affect your pattern!</div>
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
          <h1>Previous Pattern</h1>
          <div>What was your turnip pattern last week?</div>
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
          <h1>Price of Turnips</h1>
          <div>
            What was the price of your turnips this week, on your island?
          </div>
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
