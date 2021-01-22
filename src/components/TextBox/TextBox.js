import React from "react";

import NumberInput from "../NumberInput/NumberInput";
import PreviousPatternButton from "../buttons/PreviousPatternButton";
import WeekdayField from "../WeekdayField/WeekdayField";

import "./TextBox.css";
class TextBox extends React.Component {
  render() {
    return (
      <div className="text-box-container">
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
        <div classname="pattern-buttons">
          <PreviousPatternButton text={"Large Spike"} />
          <PreviousPatternButton text={"Small Spike"} />
          <PreviousPatternButton text={"Decreasing"} />
          <PreviousPatternButton text={"Fluctuating"} />
          <PreviousPatternButton text={"I don't know"} />
        </div>
        <div className="text-box-style">
          <h1>Price of Turnips</h1>
          What was the price of your turnips this week, on your island?
          <div className="input-style">
            <NumberInput />
          </div>
          <WeekdayField />
        </div>
      </div>
    );
  }
}

export default TextBox;
