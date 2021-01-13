import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const NumberInputStyles = withStyles({
  root: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
      margin: 80
    },
    "&$disabled": {
      color: 'red',
      '&:before': {
        borderBottom: 'none!important',
      },
      '& svg': {
        display: 'none',
      },
    },
  },
  underline: {
    '&:after': {
      transition: 'none',
    },
  },
})(TextField);

const NumberInput = () => {
	return (
		<NumberInputStyles type='number' />
	);
}

export default NumberInput;