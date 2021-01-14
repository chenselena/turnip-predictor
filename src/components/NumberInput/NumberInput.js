import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import BellsIcon from "../BellBagIcon/BellsIcon";

const styles = {
  root: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
      margin: 10,
    },
    "&$disabled": {
      color: "red",
      "&:before": {
        borderBottom: "none!important",
      },
    },
  },
  underline: {
    "&:after": {
      transition: "none",
    },
  },
  input: {
    color: "#a18d70",
    fontFamily: "Varela Round",
    fontWeight: "bold",
    fontSize: "0.9em",
  },
  cssLabel: {
    color: "#a18d70",
  },
};

function NumberInput(props) {
  const { classes } = props;

  return (
    <div className="number-input-styles">
      <TextField
        className={classes.root}
        fullWidth
        InputLabelProps={{ classes: classes.cssLabel }}
        InputProps={{ startAdornment: <BellsIcon />, className: classes.input }}
        type="number"
      />
    </div>
  );
}

NumberInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NumberInput);
