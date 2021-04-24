import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    color: '#EEFBFB',
    margin: '0.5rem',
    width: '10rem',
    backgroundColor: '#007CC7',
    '&:hover': {
      background: '#4DA8DA',
    },
  },
});

const Button = ({ type, text }, rest) => {
  const classes = useStyles();
  return (
    <MuiButton {...rest} type={type} variant='contained' className={classes.button}>
      {text}
    </MuiButton>
  );
};

export default Button;
