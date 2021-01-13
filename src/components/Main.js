import React from 'react';

import DaisyMae from './DaisyMae/DaisyMae';
import TextBox from './TextBox/TextBox';

import '../css/Main.css';

function Main() {
  return (
    <div className='container'>
      <div className='daisy-mae-spacing'>
        <DaisyMae />
      </div>
      <div className='textbox'>
        <TextBox />
      </div>
    </div>
  );
}

export default Main;
