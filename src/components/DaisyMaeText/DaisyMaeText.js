import React, { useState } from 'react';

import ChoiceButton from '../ChoiceButton/ChoiceButton';

import './DaisyMaeText.css';

function DaisyMaeText() {
  return (
    <div className='daisy-container'>
      <div className='daisy-name'>
        Daisy Mae
      </div>
      <div className='daisy-text'>
        Hello! Welcome to the <span className='orange'>Turnip Predictor</span>. I can help predict turnip prices throughout the week. Just a quick question, is this the first time anyone is buying turnips on your island? {'\n'}
        <div className='daisy-buttons'>
          <ChoiceButton text={'Yes'} />
          <ChoiceButton text={'No'} />
        </div>
      </div>
    </div>
  );
}

export default DaisyMaeText;
