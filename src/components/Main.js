import React from "react";

import DaisyMae from "./DaisyMae/DaisyMae";
import TextBox from "./TextBox/TextBox";
import Predictions from "./Predictions/Predictions";

import "../css/Main.css";
class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="daisy-mae-spacing">
          <DaisyMae />
        </div>
        <div className="textbox">
          <Predictions />
        </div>
      </div>
    );
  }
}

export default Main;
