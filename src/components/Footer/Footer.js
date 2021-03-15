import React from "react";

import Isabelle from "../../images/Isabelle_NH.png";

import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          <img src={Isabelle} alt="DaisyMaeImg" />
        </div>
        <div>This was made purely for fun by chenselena on Github</div>
      </div>
    );
  }
}

export default Footer;
