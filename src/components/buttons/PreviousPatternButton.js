import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const PreviousPatternButtonStyles = withStyles({
  root: {
    backgroundColor: "#bae0c9",
    color: "#7C6B51",
    fontFamily: ["Varela Round", "sans-serif"],
    fontWeight: "bold",
    marginRight: "15px",
    marginLeft: "-2px",
    marginTop: "15px",
    padding: "12px 15px 12px",
    borderRadius: "8px",
    fontSize: "0.85em",
    // boxShadow: "0 0 0 0.2rem rgba(136, 201, 161,.5)",
    "&:hover": {
      backgroundColor: "#88c9a1",
      boxShadow: "0 0 0 0.2rem rgba(255, 210, 10,.5)",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#88c9a1",
    },
    "&:focus": {
      backgroundColor: "#88c9a1",
    },
  },
})(Button);

const PreviousPatternButton = ({ text }) => {
  return <PreviousPatternButtonStyles>{text}</PreviousPatternButtonStyles>;
};

export default PreviousPatternButton;
