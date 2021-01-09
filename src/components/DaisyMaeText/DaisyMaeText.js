import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import DaisyMaeImg from '../../images/daisy_mae_shadow.png';

import './DaisyMaeText.css';

const ChoiceButton = withStyles({
  root: {
    backgroundColor: '#ffe369',
    color: '#7C6B51',
    fontFamily: ['Varela Round', 'sans-serif'],
    fontWeight: 'bold',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#fccf09',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#fccf09',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

function DaisyMaeText() {
  return (
    <div>
      <div className='daisy-image'>
        <img src={DaisyMaeImg} alt="DaisyMaeImg" />
      </div>
      <div className='daisy-text'>
        Hello! Welcome to the <span className='orange'>Turnip Predictor</span>. I can help predict turnip prices throughout the week. Just a quick question, is this the first time anyone is buying turnips on your island? {'\n'}
        <div className='daisy-buttons'>
          <ChoiceButton>Yes</ChoiceButton>
          <ChoiceButton>No</ChoiceButton>
        </div>
      </div>
      <div className='daisy-name'>
        Daisy Mae
      </div>
    </div>
  );
}

export default DaisyMaeText;
