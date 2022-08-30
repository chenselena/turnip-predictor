import React, { useState } from "react";
import axios from "axios";

import PriceChart from "../Chart/Chart";

import { Predictor } from "../../utils/predictor";

import "./Predictions.css";

const empty_prices = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];

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
    props.previousPattern === -2 ||
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

  if (isNaN(props.prices[1])) {
    return (
      <div>
        <div className="chart-container-no">
          <PriceChart results={results} />
          <div style={{ paddingTop: "10px" }}>
            Hmmm... come back in the afternoon and let us know your PM price.
            You may get lucky!
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
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
                <th>Expected Min</th>
                <th>Likely Max</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, i) =>
                displayPercentage(res.category_total_probability) !==
                "<0.01%" ? (
                  <tr key={i}>
                    <td>{pat_desc[res.pattern_number]}</td>
                    <td>{displayPercentage(res.category_total_probability)}</td>
                    {res.prices.slice(2).map((day) =>
                      day.min === day.max ? (
                        <td>{day.min}</td>
                      ) : (
                        <td>
                          {day.min}~{day.max}
                        </td>
                      )
                    )}
                    <td>{res.weekGuaranteedMinimum}</td>
                    <td>{res.weekMax}</td>
                  </tr>
                ) : (
                  <span></span>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const Predictions = (props) => {
  const [firstBuy, setFirstBuy] = useState(null);
  const [previousPattern, setPreviousPattern] = useState(-2);
  const [prices, setPrices] = useState(empty_prices);
  const [sundayPrice, setSundayPrice] = useState(NaN);
  const [submit, setSubmit] = useState(false);

  const handleFirstBuyChange = (e) => {
    const isFirstBuy = e.currentTarget.value === "true" ? true : false;
    setFirstBuy(isFirstBuy);
  }

  const handlePreviousPatternChange = (e) => {
    if (e.currentTarget.value === "-1") {
      setPreviousPattern(-1);
    } else if (e.currentTarget.value === "0") {
      setPreviousPattern(0);
    } else if (e.currentTarget.value === "3") {
      setPreviousPattern(3);
    } else if (e.currentTarget.value === "1") {
      setPreviousPattern(1);
    } else {
      setPreviousPattern(1);
    }
  }

  const handlePricesChange = (newPrice, i) => {
    const newPrices = [...prices];
    newPrices[i] = newPrice;
    setPrices(newPrices);
  }

  const handleSundayPriceChange = (newSundayPrice) => {
    setSundayPrice(newSundayPrice);
  }

  const submitPrice = () => {
    const priceData = {
      first_buy: firstBuy ? "Yes" : "No",
      previous_pattern: previousPattern,
      buy_price: sundayPrice,
      mon_AM: prices[0],
      mon_PM: prices[1],
      tues_AM: prices[2],
      tues_PM: prices[3],
      weds_AM: prices[4],
      weds_PM: prices[5],
      thurs_AM: prices[6],
      thurs_PM: prices[7],
      fri_AM: prices[8],
      fri_PM: prices[9],
      sat_AM: prices[10],
      sat_PM: prices[11],
    }
    axios.post("http://localhost:5000/prices", priceData).catch(err => console.log(err));
    setSubmit(true);
  }

  return (
    <div className="predictions-container">
      <div className="questions-container">
        <div className="input-buttons">
          <h1>Is this your first time buying turnips?</h1>
          <div className="secondary-text">This will affect your pattern!</div>
          <input
            id="first-buy-yes"
            type="radio"
            value="true"
            checked={firstBuy === true}
            onChange={handleFirstBuyChange}
          />
          <label htmlFor="first-buy-yes">Yes</label>
          <input
            id="first-buy-no"
            type="radio"
            value="false"
            checked={firstBuy === false}
            onChange={handleFirstBuyChange}
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
            onChange={handlePreviousPatternChange}
          />
          <label htmlFor="pattern-idk">I don't know</label>
          <input
            id="pattern-fluctuating"
            type="radio"
            value="0"
            checked={previousPattern === 0}
            onChange={handlePreviousPatternChange}
          />
          <label htmlFor="pattern-fluctuating">Fluctuating</label>
          <input
            id="pattern-small-spike"
            type="radio"
            value="3"
            checked={previousPattern === 3}
            onChange={handlePreviousPatternChange}
          />
          <label htmlFor="pattern-small-spike">Small spike</label>
          <input
            id="pattern-large-spike"
            type="radio"
            value="1"
            checked={previousPattern === 1}
            onChange={handlePreviousPatternChange}
          />
          <label htmlFor="pattern-large-spike">Large spike</label>
          <input
            id="pattern-decreasing"
            type="radio"
            value="2"
            checked={previousPattern === 2}
            onChange={handlePreviousPatternChange}
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
              onChange={(e) => handleSundayPriceChange(e.target.value)}
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
                  onChange={(e) => handlePricesChange(e.target.value, i)}
                />
              </div>
            ))}
          </div>
          <div>
            { firstBuy !== null && previousPattern !== -2 && !isNaN(sundayPrice) && !isNaN(prices[0]) ? 
            <span>
              { submit ? <div className="sold-class">Yay! You sold this week. We hope you made a lot of profit!</div> : <div className="sold-button-wrapper"><button className="sold-button" type="submit" onClick={submitPrice}>I sold!</button></div>}
            </span>
            : null}
          </div>
        </div>
      </div>
      { submit ? null :  <div>
        <GetPredictionPrices
          firstBuy={firstBuy}
          previousPattern={previousPattern}
          prices={prices}
          sundayPrice={sundayPrice}
        />
      </div>}
    </div>
  );
};

export default Predictions;
