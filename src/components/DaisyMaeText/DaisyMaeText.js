import React from 'react';
import DaisyMaeImg from '../../images/daisy_mae_shadow.png';

import './DaisyMaeText.css';

function DaisyMaeText() {
  return (
    <div>
      <div className='daisy-image'>
        <img src={DaisyMaeImg} alt="DaisyMaeImg" />
      </div>
      <div className='daisy-text'>
        Hello! Welcome to the <span className='orange'>Turnip Predictor</span>. I can help predict turnip prices throughout the week. Just a quick question, is this your first time buying turnips on your island?
      </div>
      <div className='daisy-name'>
        Daisy Mae
      </div>
    </div>
  );
}

export default DaisyMaeText;
