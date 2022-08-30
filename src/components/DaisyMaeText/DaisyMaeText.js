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
            . I can help you track your turnip prices and predict what they will
            be throughout the week. To get started, enter your prices below!
          </div>
        </div>
    );
  }
}

export default DaisyMaeText;
