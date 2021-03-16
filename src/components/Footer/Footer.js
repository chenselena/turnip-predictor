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
          Credit to Ninji's amazing work on data-mining the turnip pricing code
          and mikebryant's creation of the pricing algorithm in JavaScript.
          Designed and created by chenselena 💕
        </div>
        <div className="isabelle-img">
          <img src={Isabelle} alt="DaisyMaeImg" />
        </div>
      </div>
    );
  }
}

export default Footer;
