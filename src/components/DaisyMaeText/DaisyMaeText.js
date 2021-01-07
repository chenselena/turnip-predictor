import React from 'react';
import DaisyMaeImg from '../../images/daisy_mae.png';

import './DaisyMaeText.css';

function DaisyMaeText() {
  return (
    <div>
      <div className='daisy-image'>
        <img src={DaisyMaeImg} alt="DaisyMaeImg" />
      </div>
      <div className='daisy-text'>
        Hello! Is this your first time buying turnips?
      </div>
      <div className='daisy-name'>
        Daisy Mae
      </div>
    </div>
  );
}

export default DaisyMaeText;
