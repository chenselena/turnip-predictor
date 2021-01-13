import React from 'react';

import DaisyMaeText from '../DaisyMaeText/DaisyMaeText';
import DaisyMaeImg from '../../images/daisy_mae_shadow.png';

import './DaisyMae.css';

function DaisyMae() {
	return (
		<div className='daisy-mae'>
			<div className='daisy-image'>
				<img src={DaisyMaeImg} alt="DaisyMaeImg" />
			</div>
			<div className='daisy-mae-text'>
				<DaisyMaeText />
			</div>
		</div>
	);
}

export default DaisyMae;