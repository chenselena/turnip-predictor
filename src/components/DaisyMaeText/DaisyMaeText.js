import React from "react";

import "./DaisyMaeText.css";
class DaisyMaeText extends React.Component {
  render() {
    return (
      <div className="daisy-container">
        <div className="daisy-name">Daisy Mae</div>
        <div className="daisy-text">
          Hello!
          <br /> Welcome to the <span className="orange">Turnip Predictor</span>
          . I can help predict turnip prices throughout the week. <br /> Just
          enter your prices below and let us do the calculations!
        </div>
      </div>
    );
  }
}

export default DaisyMaeText;
