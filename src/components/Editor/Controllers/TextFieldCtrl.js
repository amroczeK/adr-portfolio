import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles({
  textField: {
    overflow: 'hidden',
    width: '15rem',
    margin: '0.5rem',
  },
});

const TextFieldCtrl = ({ name, label, control, readOnly = false }) => {
  const classes = useStyles();
  return (
    <Controller
      name={name}
      isClearable
      control={control}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            variant='filled'
            label={label}
            className={classes.textField}
            size='small'
            inputRef={field.ref}
            required
            InputProps={{
              readOnly: readOnly,
            }}
          />
        </>
      )}
    />
  );
};

export default TextFieldCtrl;
