import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles({
  textArea: {
    padding: '0.5rem',
    margin: '0.5rem',
    background: '#EEFBFB',
  },
});

const TextAreaCtrl = ({ name, control }) => {
  const classes = useStyles();
  return (
    <Controller
      name={name}
      isClearable
      control={control}
      render={({ field }) => (
        <TextareaAutosize
          {...field}
          rowsMin={10}
          placeholder='Type item description here...'
          className={classes.textArea}
        />
      )}
    />
  );
};

export default TextAreaCtrl;
