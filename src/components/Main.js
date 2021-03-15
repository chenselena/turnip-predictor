import React from "react";

import DaisyMae from "./DaisyMae/DaisyMae";
import Predictions from "./Predictions/Predictions";
import Footer from "./Footer/Footer";

import "../css/Main.css";
class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="daisy-mae-spacing">
          <DaisyMae />
        </div>

        <div className="predictions">
          <Predictions />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
