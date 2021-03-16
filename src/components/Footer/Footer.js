import React from "react";

import Isabelle from "../../images/Isabelle_NH.png";

import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-name">Isabelle</div>
        <div className="footer-text">
          After your prices have been inputted, we will continually try and
          predict what prices or patterns you will get next!
          <br />
          Credit to{" "}
          <a
            className="orange"
            href="https://twitter.com/_Ninji/status/1244818665851289602?s=20"
          >
            Ninji's
          </a>{" "}
          amazing work on data-mining the turnip pricing code and{" "}
          <a
            className="orange"
            href="https://github.com/mikebryant/ac-nh-turnip-prices"
          >
            mikebryant's{" "}
          </a>
          creation of the pricing algorithm in JavaScript. Designed and created
          by{" "}
          <a className="orange" href="https://github.com/chenselena">
            chenselena
          </a>{" "}
          💕
        </div>
        <div className="isabelle-img">
          <img src={Isabelle} alt="DaisyMaeImg" />
        </div>
      </div>
    );
  }
}

export default Footer;
