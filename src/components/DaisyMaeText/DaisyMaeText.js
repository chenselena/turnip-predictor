import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import './DaisyMaeText.css';

const ChoiceButton = withStyles({
  root: {
    backgroundColor: '#FFE47A',
    // boxShadow: '0 0 0 0.2rem rgba(255, 210, 10,.5)',
    color: '#7C6B51',
    fontFamily: ['Varela Round', 'sans-serif'],
    fontWeight: 'bold',
    marginRight: '19px',
    marginLeft: '-2px',
    padding: '10px 15px 10px',
    borderRadius: '8px',
    fontSize: '0.85em',
    '&:hover': {
      backgroundColor: '#ffd20a',
      boxShadow: 'none',
      boxShadow: '0 0 0 0.2rem rgba(255, 210, 10,.5)',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffd20a',
    },
    '&:focus': {
      backgroundColor: '#ffd20a',
    },
  },
})(Button);

function DaisyMaeText() {
  return (
    <div className='daisy-container'>
      <div className='daisy-name'>
        Daisy Mae
      </div>
      <div className='daisy-text'>
        Hello! Welcome to the <span className='orange'>Turnip Predictor</span>. I can help predict turnip prices throughout the week. Just a quick question, is this the first time anyone is buying turnips on your island? {'\n'}
        <div className='daisy-buttons'>
          <ChoiceButton>Yes</ChoiceButton>
          <ChoiceButton>No</ChoiceButton>
        </div>
      </div>
    </div>
  );
}

export default DaisyMaeText;
