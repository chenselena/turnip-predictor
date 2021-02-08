import React, { useCallback, useEffect, useState } from "react";
import { PropTypes, arrayOf, string, func } from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  FormGroup,
  Button,
  ButtonGroup,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import BellsIcon from "../BellBagIcon/BellsIcon";
import { Predictor } from "../../utils/predictor";

import "./TextBox.css";

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
      const newInput = Array.from({ length: 12 }, (v, i) =>
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

const numberInputStyles = makeStyles(() => ({
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
}));

const NumberInput = () => {
  const classes = numberInputStyles();

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
};

function TextBox(props) {
  let firstBuy = props.firstBuy;
  let previousPattern = props.previousPattern;

  const handleFirstBuy = (e) => {
    const id = e.currentTarget.id;
    if (id == 1) {
      firstBuy = true;
      console.log("firstBuy is " + firstBuy);
    } else {
      firstBuy = false;
      console.log("firstBuy is " + firstBuy);
    }
  };

  const handlePreviousPattern = (e) => {
    const id = e.currentTarget.id;
    if (id == 0) {
      previousPattern = -1;
      console.log("previous pattern is " + previousPattern);
    } else if (id == 1) {
      previousPattern = 0;
      console.log("previous pattern is " + previousPattern);
    } else if (id == 2) {
      previousPattern = 3;
      console.log("previous pattern is " + previousPattern);
    } else if (id == 3) {
      previousPattern = 1;
      console.log("previous pattern is " + previousPattern);
    } else {
      previousPattern = 2;
      console.log("previous pattern is " + previousPattern);
    }
  };

  return (
    <div className="text-box-container">
      <div>
        <h1>Is this your first time buying turnips?</h1>
        This affects your pattern!
        <div className="daisy-buttons">
          <ChoiceButton id={1} onClick={handleFirstBuy}>
            Yes
          </ChoiceButton>
          <ChoiceButton id={2} onClick={handleFirstBuy}>
            No
          </ChoiceButton>
        </div>
      </div>
      <h1>Previous Pattern</h1>
      What was your turnip pattern last week?
      <div className="pattern-buttons">
        <PreviousPatternButton id={0} onClick={handlePreviousPattern}>
          I don't know
        </PreviousPatternButton>
        <PreviousPatternButton id={1} onClick={handlePreviousPattern}>
          Fluctuating
        </PreviousPatternButton>
        <PreviousPatternButton id={2} onClick={handlePreviousPattern}>
          Small Spike
        </PreviousPatternButton>
        <PreviousPatternButton id={3} onClick={handlePreviousPattern}>
          Large Spike
        </PreviousPatternButton>
        <PreviousPatternButton id={4} onClick={handlePreviousPattern}>
          Decreasing
        </PreviousPatternButton>
      </div>
      <div className="text-box-style">
        <h1>Price of Turnips</h1>
        What was the price of your turnips this week, on your island?
        <div className="input-style">
          <NumberInput />
        </div>
        <WeekdayField />
      </div>
      <div>
        <h1>Prediction Chart</h1>
        <PredictionTable
          firstBuy={firstBuy}
          previousPattern={previousPattern}
        />
      </div>
    </div>
  );
}

function PredictionTable(props) {
  let prices = [
    100,
    100,
    99,
    98,
    97,
    96,
    95,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
  ];
  let predict = new Predictor(prices, props.firstBuy, props.previousPattern);
  let results = predict.analyze_possibilities();
  console.log("current firstBuy: " + props.firstBuy);
  console.log("current previousPattern: " + props.previousPattern);
  for (let res of results) {
    for (let day of res.prices.slice(2)) {
      console.log("Day min: " + day.min);
      console.log("Day max: " + day.max);
    }
    console.log("guaranteed min" + res.weekGuaranteedMinimum);
    console.log("week max: " + res.weekMax);
  }
  console.log("this is the prices" + prices);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Minimum</TableCell>
              <TableCell>Maximum</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}

const PreviousPatternButton = withStyles({
  root: {
    backgroundColor: "#bae0c9",
    color: "#7C6B51",
    fontFamily: ["Varela Round", "sans-serif"],
    fontWeight: "bold",
    marginRight: "15px",
    marginLeft: "-2px",
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

const ChoiceButton = withStyles({
  root: {
    backgroundColor: "#bae0c9",
    // boxShadow: '0 0 0 0.2rem rgba(255, 210, 10,.5)',
    color: "#7C6B51",
    fontFamily: ["Varela Round", "sans-serif"],
    fontWeight: "bold",
    marginRight: "8px",
    marginLeft: "5px",
    marginTop: "12px",
    marginBottom: "28px",
    padding: "10px 15px 10px",
    borderRadius: "8px",
    fontSize: "0.85em",
    "&:hover": {
      backgroundColor: "#88c9a1",
      boxShadow: "none",
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

// const ChoiceButton = (props) => {
//   return <ChoiceButtonStyles id={props.id}>{text}</ChoiceButtonStyles>;
// };

export default TextBox;
