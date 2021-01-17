import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";

import ChoiceButton from "../buttons/ChoiceButton";

import "./DaisyMaeText.css";
class DaisyMaeText extends React.Component {
  render() {
    return (
      <div className="daisy-container">
        <div className="daisy-name">Daisy Mae</div>
        <div className="daisy-text">
          Hello! Welcome to the <span className="orange">Turnip Predictor</span>
          . I can help predict turnip prices throughout the week. Just a quick
          question, is this the first time anyone is buying turnips on your
          island? {"\n"}
          <div className="daisy-buttons">
            <ButtonGroup>
              <ChoiceButton text={"Yes"} />
              <ChoiceButton text={"No"} />
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default DaisyMaeText;
