import React from 'react';

import DaisyMaeText from './DaisyMaeText/DaisyMaeText';
import DaisyMaeImg from '../images/daisy_mae_shadow.png';
import '../css/Main.css';

function Main() {
  return (
    <div className='container'>
      <div className='daisy-image'>
        <img src={DaisyMaeImg} alt="DaisyMaeImg" />
      </div>
      <div className='daisy-mae-text'>
        <DaisyMaeText />
      </div>
    </div>
  );
}

export default Main;
