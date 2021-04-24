import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textArea: {
    padding: '0.5rem',
    margin: '0.5rem',
    width: '40rem',
    background: '#EEFBFB',
  },
});

const TextArea = (...rest) => {
  const classes = useStyles();
  console.log(rest)
  return (
    <TextareaAutosize
      {...rest}
      rowsMin={10}
      className={classes.textArea}
      placeholder={'test'}
    />
  );
};

export default TextArea;
