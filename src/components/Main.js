import React from 'react';

import DaisyMae from './DaisyMae/DaisyMae';
import TextBox from './TextBox/TextBox';

import '../css/Main.css';
class Main extends React.Component {
  render() {
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
}

export default Main;
