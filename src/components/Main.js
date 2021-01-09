import React from 'react';
import Fade from 'react-reveal/Fade';
import DaisyMaeText from './DaisyMaeText/DaisyMaeText';
import '../css/Main.css';

function Main() {
  return (
    <div className='container'>
      <Fade top>
        <div className='daisy-mae'>
          <DaisyMaeText />
        </div>
      </Fade>
    </div>
  );
}

export default Main;
