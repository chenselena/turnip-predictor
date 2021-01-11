import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import TextBox from '../TextBox/TextBox';

import './DaisyMaeText.css';

const ChoiceButton = withStyles({
  root: {
    backgroundColor: '#fff2ba',
    boxShadow: '0 0 0 0.2rem rgba(255, 210, 10,.5)',
    color: '#7C6B51',
    fontFamily: ['Varela Round', 'sans-serif'],
    fontWeight: 'bold',
    marginRight: '1.3rem',
    '&:hover': {
      backgroundColor: '#ffd20a',
      borderColor: '#0062cc',
      boxShadow: 'none',
      boxShadow: '0 0 0 0.2rem rgba(255, 210, 10,.5)',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffd20a',
      borderColor: '#005cbf',
    },
    '&:focus': {
      backgroundColor: '#ffd20a',
    },
  },
})(Button);

function DaisyMaeText() {
  const [click, setClick] = useState(false);
  const onClick = () => setClick(true);

  return (
    <div className='daisy-container'>
      <div classname='daisy-name-position' id='daisy-name'>
        Daisy Mae
      </div>
      <div className='daisy-text-position' id='daisy-text'>
        Hello! Welcome to the <span className='orange'>Turnip Predictor</span>. I can help predict turnip prices throughout the week. Just a quick question, is this the first time anyone is buying turnips on your island? {'\n'}
        <div className='daisy-buttons'>
          <ChoiceButton onClick={onClick}>Yes</ChoiceButton>
          <ChoiceButton onClick={onClick}>No</ChoiceButton>
        </div>
      </div>
      <div className='textbox'>
        { click ? <TextBox /> : null }
      </div>
    </div>
  );
}

export default DaisyMaeText;
