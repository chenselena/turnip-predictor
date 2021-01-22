import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Box, FormGroup } from "@material-ui/core";

import BellsIcon from "../BellBagIcon/BellsIcon";

import "./WeekdayField.css";

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
    fontSize: "1.1em",
  },
  cssLabel: {
    color: "#a18d70",
  },
};

function WeekdayField(props) {
  const { classes } = props;

  const weekdays = [
    ..."Mon Tues Weds Thurs Fri Sat"
      .split(" ")
      .reduce(
        (curr, day) => [...curr, ...[`${day} ${"AM"}`, `${day} ${"PM"}`]],
        []
      ),
  ];

  const fields = Array.from({ length: 12 }, (v, i) => i).map((index) => (
    <TextField
      className={classes.root}
      key={`value-${index}`}
      type="number"
      label={weekdays[index]}
      fullWidth
      InputProps={{ startAdornment: <BellsIcon /> }}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{ pattern: "[0-9]*", tabIndex: 0 }}
    />
  ));

  return (
    <Box display="flex" flexDirection="column">
      <FormGroup>
        <Box m={2} p={2} mb={-1} display="flex">
          <Box display="flex" flexWrap="wrap" alignItems="stretch">
            {fields.reduce(
              (prev, curr, index) =>
                index % 2
                  ? [
                      ...prev.slice(0, -1),
                      <Box>
                        <Box
                          display="flex"
                          key={index}
                          p={0.5}
                          width={{ xs: 0.5 }}
                        >
                          <Box p={1}>
                            <Box m={1}>{prev.slice(-1)}</Box>
                            <Box m={1}>{curr}</Box>
                          </Box>
                        </Box>
                      </Box>,
                    ]
                  : [...prev, curr],
              []
            )}
          </Box>
        </Box>
      </FormGroup>
    </Box>
  );
}

export default withStyles(styles)(WeekdayField);
