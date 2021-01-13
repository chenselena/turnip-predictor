import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BellsIcon from '../BellBagIcon/BellsIcon';

const NumberInputStyles = withStyles({
  root: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
      margin: 10
    },
    "&$disabled": {
      color: 'red',
      '&:before': {
        borderBottom: 'none!important',
      },
      // '& svg': {
      //   display: 'none',
      // },
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
		<div className='number-input-styles'>
		<NumberInputStyles size='small' InputProps={{startAdornment: (<BellsIcon />),}} type='number' />
		</div>
	);
}

export default NumberInput;