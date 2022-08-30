import React from "react";

import TomNookImg from "../../images/tomnook.png";

import "./TomNook.css";

class TomNook extends React.Component {
  render() {
    return (
      <div className="tom-container">
        <div className="tom-name">Tom Nook</div>
        <div className="tom-text">
            Hi there! If you let us know that you sold last week, you will see your past prices and patterns here. Every week you can keep track of what your patterns are and see how much profit you made!
        </div>
        <div className="tom-img">
          <img style={{width:"95%", height:"95%"}} src={TomNookImg} alt="DaisyMaeImg" />
        </div>
      </div>
    );
  }
}

export default TomNook;
