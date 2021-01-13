import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import './TextBox.css';

const NumberInput = withStyles({
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

function TextBox() {
  return (
    <div className='text-box-container'>
      <h1>Price of Turnips</h1>
      What was the price of your turnips this week, on your island?
      <div>
        <NumberInput type='number' />
      </div>
      <div className='text-box-style'>
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
      </div>
      <div>
        <NumberInput type='number' />
      </div>
      <div className='text-box-style'>
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
      </div>
      <div>
        <NumberInput type='number' />
      </div>
      <div className='text-box-style'>
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
      </div>
      <div>
        <NumberInput type='number' />
      </div>
    </div>
  );
}

export default TextBox;

