import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";

import "./Header.css";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-header">
            <Logo />
        </div>
        <nav className="nav-class">
          <NavLink style={{color: "#fff"}} className="link-class" activeClassName="active" to="/" exact={true}>
            Home
          </NavLink>
          <NavLink style={{color: "#fff"}} className="link-class" activeClassName="active" to="/past" exact={true}>
            Price History
          </NavLink>
        </nav>
      </div>
    );
  };
  
  export default Header;
  