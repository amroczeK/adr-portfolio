import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textField: {
    //height: '2rem',
    overflow: 'hidden',
    //background: '#EEFBFB',
    width: '15rem',
    margin: '0.5rem',
  },
});

const TextField = ({ label, name }, rest) => {
  const classes = useStyles();
  return (
    <MuiTextField
      {...rest}
      variant='filled'
      id={name}
      label={label}
      name={name}
      className={classes.textField}
      size='small'
    />
  );
};

export default TextField;
