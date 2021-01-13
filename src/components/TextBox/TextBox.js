import React from 'react';

import NumberInput from '../NumberInput/NumberInput';

import './TextBox.css';

function TextBox() {
  return (
    <div className='text-box-container'>
      <h1>Price of Turnips</h1>
      What was the price of your turnips this week, on your island?
      <div>
        <NumberInput />
      </div>
      <div className='text-box-style'>
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
      </div>

      <div className='text-box-style'>
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
      </div>

      <div className='text-box-style'>
        <h1>Previous Pattern</h1>
        What was your turnip pattern last week?
      </div>

    </div>
  );
}

export default TextBox;

