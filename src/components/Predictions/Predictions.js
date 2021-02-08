import React from "react";
import { Button } from "@material-ui/core";

import BellsIcon from "../BellBagIcon/BellsIcon";
import { Predictor } from "../../utils/predictor";

const prices = [
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
];

function GetPredictionPrices(props) {
  let prices = [
    100,
    100,
    99,
    98,
    97,
    96,
    95,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
  ];
  let predict = new Predictor(prices, props.firstBuy, props.previousPattern);
  console.log("From prediction function this is first buy: " + props.firstBuy);
  console.log(
    "From prediction function this is previous pattern: " +
      props.previousPattern
  );
  let results = predict.analyze_possibilities();
  for (let res of results) {
    for (let day of res.prices.slice(2)) {
      // console.log("Day min: " + day.min);
      // console.log("Day max: " + day.max);
    }
    // console.log("guaranteed min" + res.weekGuaranteedMinimum);
    // console.log("week max: " + res.weekMax);
    return (
      <div>
        <div>{res.weekGuaranteedMinimum}</div>
        <div>{res.weekMax}</div>
      </div>
    );
  }
  console.log("this is the prices" + prices);
}

class Predictions extends React.Component {
  constructor(props) {
    super(props);
    this.handleFirstBuyChange = this.handleFirstBuyChange.bind(this);
    this.handlePreviousPatternChange = this.handlePreviousPatternChange.bind(
      this
    );
    this.handlePricesChange = this.handlePricesChange.bind(this);
    this.state = {
      firstBuy: false,
      previousPattern: -2,
      prices,
    };
  }

  onClearPrices = () => {
    this.setState({ prices });
  };

  handleFirstBuyChange(e) {
    if (e.currentTarget.id == 1) {
      this.setState({ firstBuy: true });
    } else {
      this.setState({ firstBuy: false });
    }
  }

  handlePreviousPatternChange(e) {
    if (e.currentTarget.id == 1) {
      this.setState({ previousPattern: -1 });
    } else if (e.currentTarget.id == 2) {
      this.setState({ previousPattern: 0 });
    } else if (e.currentTarget.id == 3) {
      this.setState({ previousPattern: 3 });
    } else if (e.currentTarget.id == 4) {
      this.setState({ previousPattern: 1 });
    } else {
      this.setState({ previousPattern: 2 });
    }
  }

  handlePricesChange(e) {}

  render() {
    const firstBuy = this.state.firstBuy;
    const previousPattern = this.state.previousPattern;
    console.log(firstBuy);
    return (
      <div>
        <div>
          <h1>Is this your first buy?</h1>
          <Button id={1} onClick={this.handleFirstBuyChange}>
            Yes
          </Button>
          <Button id={2} onClick={this.handleFirstBuyChange}>
            No
          </Button>
        </div>
        <div>
          <h1>What was last week's turnip pattern?</h1>
          <Button id={1} onClick={this.handlePreviousPatternChange}>
            I don't know
          </Button>
          <Button id={2} onClick={this.handlePreviousPatternChange}>
            Fluctuating
          </Button>
          <Button id={3} onClick={this.handlePreviousPatternChange}>
            Small Spike
          </Button>
          <Button id={4} onClick={this.handlePreviousPatternChange}>
            Large Spike
          </Button>
          <Button id={5} onClick={this.handlePreviousPatternChange}>
            Decreasing
          </Button>
        </div>
        <div></div>
        <div>
          <GetPredictionPrices
            firstBuy={firstBuy}
            previousPattern={previousPattern}
          />
        </div>
      </div>
    );
  }
}
export default Predictions;
