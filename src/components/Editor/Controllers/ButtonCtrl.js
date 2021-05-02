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

const ButtonCtrl = ({ initialState, title, resetHandler, deleteHandler }) => {
  const classes = useStyles();
  return (
    <>
      <Button type='submit' variant='contained' className={classes.button}>
        {title ? title : 'Submit'}
      </Button>
      {resetHandler && initialState && (
        <Button
          type='button'
          onClick={() => {
            resetHandler(initialState);
          }}
          variant='contained'
          className={classes.button}
        >
          Reset
        </Button>
      )}
      {deleteHandler && initialState && (
        <Button
          type='button'
          onClick={() => {
            deleteHandler(initialState);
          }}
          variant='contained'
          className={classes.button}
        >
          Delete
        </Button>
      )}
    </>
  );
};

export default ButtonCtrl;
