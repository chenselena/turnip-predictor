import React, { useCallback, useState } from "react";
import { PropTypes, arrayOf, string, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Box, FormGroup } from "@material-ui/core";

import BellsIcon from "../BellBagIcon/BellsIcon";

import "./WeekdayField.css";

const useStyles = makeStyles(() => ({
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
    fontFamily: "Varela Round",
    fontWeight: "bold",
    fontSize: "1.1em",
  },
}));

const WeekdayField = ({ inputs, onChange }) => {
  const classes = useStyles();

  const handleOnChange = useCallback(
    (index) => ({
      target: {
        value,
        validity: { valid },
      },
    }) => {
      if (!valid) return;
      const newInput = Array.from({ length: 13 }, (v, i) =>
        index === i ? value : inputs[i]
      );
      onChange(newInput);
    },
    [inputs, onChange]
  );

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
      InputProps={{ startAdornment: <BellsIcon />, className: classes.input }}
      InputLabelProps={{
        shrink: true,
        className: classes.cssLabel,
      }}
      inputProps={{ pattern: "[0-9]*", tabIndex: 0 }}
      onChange={handleOnChange}
    />
  ));

  return (
    <Box display="flex" flexDirection="column">
      <FormGroup>
        <Box m={2} ml={1} mr={1} display="flex" justifyContent="center">
          {fields.reduce(
            (prev, curr, index) =>
              index % 2
                ? [
                    ...prev.slice(0, -1),
                    <Box
                      display="flex"
                      key={index}
                      p={1}
                      width={{ xs: 0.5, sm: 1 / 3, md: 1 / 6 }}
                    >
                      <Box p={0.5} display="flex" flexDirection="column">
                        <Box m={1}>{prev.slice(-1)}</Box>
                        <Box m={1}>{curr}</Box>
                      </Box>
                    </Box>,
                  ]
                : [...prev, curr],
            []
          )}
        </Box>
      </FormGroup>
    </Box>
  );
};

WeekdayField.propTypes = {
  inputs: arrayOf(string).isRequired,
  onChange: func.isRequired,
};

export default WeekdayField;
