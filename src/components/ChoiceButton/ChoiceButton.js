import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const ChoiceButtonStyles = withStyles({
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

const ChoiceButton = ({text}) => {
	return (
		<ChoiceButtonStyles>{text}</ChoiceButtonStyles>
	);
}

export default ChoiceButton;