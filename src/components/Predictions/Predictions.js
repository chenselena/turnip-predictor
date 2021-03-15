import React from "react";

import PriceChart from "../Chart/Chart";

import { Predictor } from "../../utils/predictor";

import "./Predictions.css";

const prices = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];

const weekdayLabels = [
  "Mon AM",
  "Mon PM",
  "Tue AM",
  "Tue PM",
  "Wed AM",
  "Wed PM",
  "Thurs AM",
  "Thurs PM",
  "Fri AM",
  "Fri PM",
  "Sat AM",
  "Sat PM",
];

/* ******** 
credit for the displayPercentage function belongs to https://github.com/mikebryant/ac-nh-turnip-prices 
*/
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
/* ******* */

function GetPredictionPrices(props) {
  if (
    props.firstBuy == null ||
    props.previousPattern == -2 ||
    isNaN(props.prices[0])
  ) {
    return <div className="not-enough-info"></div>;
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
    <div className="results-container">
      <div className="chart-container">
        <PriceChart results={results} />
      </div>
      <div className="prices-table">
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
      <div>
        <div className="prediction-container">
          <div className="input-buttons">
            <h1>Is this your first time buying turnips?</h1>
            <div className="secondary-text">This will affect your pattern!</div>
            <input
              id="first-buy-yes"
              type="radio"
              value="true"
              checked={firstBuy == true}
              onChange={this.handleFirstBuyChange}
            />
            <label htmlFor="first-buy-yes">Yes</label>
            <input
              id="first-buy-no"
              type="radio"
              value="false"
              checked={firstBuy == false}
              onChange={this.handleFirstBuyChange}
            />
            <label htmlFor="first-buy-no">No</label>
          </div>
          <div className="input-buttons">
            <h1>Previous Pattern</h1>
            <div className="secondary-text">
              What was your turnip pattern last week?
            </div>
            <input
              id="pattern-idk"
              type="radio"
              value="-1"
              checked={previousPattern === -1}
              onChange={this.handlePreviousPatternChange}
            />
            <label htmlFor="pattern-idk">I don't know</label>
            <input
              id="pattern-fluctuating"
              type="radio"
              value="0"
              checked={previousPattern === 0}
              onChange={this.handlePreviousPatternChange}
            />
            <label htmlFor="pattern-fluctuating">Fluctuating</label>
            <input
              id="pattern-small-spike"
              type="radio"
              value="3"
              checked={previousPattern === 3}
              onChange={this.handlePreviousPatternChange}
            />
            <label htmlFor="pattern-small-spike">Small spike</label>
            <input
              id="pattern-large-spike"
              type="radio"
              value="1"
              checked={previousPattern === 1}
              onChange={this.handlePreviousPatternChange}
            />
            <label htmlFor="pattern-large-spike">Large spike</label>
            <input
              id="pattern-decreasing"
              type="radio"
              value="2"
              checked={previousPattern === 2}
              onChange={this.handlePreviousPatternChange}
            />
            <label htmlFor="pattern-decreasing">Decreasing</label>
          </div>
          <div className="price-input">
            <h1>Price of Turnips</h1>
            <div className="secondary-text">
              What was the price of your turnips this week, on your island?
            </div>
            <h2>Buy Price</h2>
            <div className="buy-price-input">
              <input
                type="number"
                value={sundayPrice}
                onChange={(e) => this.handleSundayPriceChange(e.target.value)}
              />
            </div>
            <div className="daily-price-input">
              {prices.map((item, i) => (
                <div>
                  <label>{weekdayLabels[i]}</label>
                  <input
                    type="number"
                    key={i}
                    value={item}
                    onChange={(e) => this.handlePricesChange(e.target.value, i)}
                  />
                </div>
              ))}
            </div>
          </div>
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
