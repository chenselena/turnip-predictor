import React from "react";

import NumberInput from "../NumberInput/NumberInput";
import PreviousPatternButton from "../buttons/PreviousPatternButton";
import "./TextBox.css";

function TextBox() {
  return (
    <div className="text-box-container">
      <h1>Price of Turnips</h1>
      What was the price of your turnips this week, on your island?
      <div className="input-style">
        <NumberInput />
      </div>
      <div className="text-box-style">
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
        <div classname="pattern-buttons">
          <PreviousPatternButton text={"Large Spike"} />
          <PreviousPatternButton text={"Small Spike"} />
          <PreviousPatternButton text={"Decreasing"} />
          <PreviousPatternButton text={"Fluctuating"} />
          <PreviousPatternButton text={"I don't know"} />
        </div>
      </div>
      <div className="text-box-style">
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
      </div>
      <div className="text-box-style">
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
      </div>
    </div>
  );
}

export default TextBox;
