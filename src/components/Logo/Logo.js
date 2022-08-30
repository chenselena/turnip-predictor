import React from "react";

import LogoImg from "../../images/turniplogo.png";
import "./Logo.css";

const Logo = () => {
    return (
      <div className="logo">
        <img style={{width: "35%", height: "35%"}} src={LogoImg} alt="Logo img" />
      </div>
    );
  };
  
  export default Logo;
  