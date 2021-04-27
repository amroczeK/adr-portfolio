import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const ButtonCtrl = ({ reset, initialState, title }) => {
  const classes = useStyles();
  return (
    <>
      <Button type='submit' variant='contained' className={classes.button}>
        {title ? title : 'Submit'}
      </Button>
      {reset && initialState && (
        <Button
          type='button'
          onClick={() => {
            reset(initialState);
          }}
          variant='contained'
          className={classes.button}
        >
          Reset
        </Button>
      )}
    </>
  );
};

export default ButtonCtrl;
