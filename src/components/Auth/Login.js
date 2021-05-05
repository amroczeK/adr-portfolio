import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router';
import { auth } from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm, Controller } from 'react-hook-form';
import { Paper, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '25rem',
    minWidth: '22rem',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  form: {
    margin: '1.5rem',
  },
  alert: {
    marginTop: '1rem',
    maxWidth: '18rem',
  },
});

const defaultValues = {
  email: '',
  password: '',
};

const Login = ({ history }) => {
  const classes = useStyles();

  const [error, setError] = useState(null);

  const { handleSubmit, control } = useForm({ defaultValues });

  const handleLogin = useCallback(
    async (event) => {
      const { email, password } = event;
      try {
        await auth.signInWithEmailAndPassword(email, password);
        history.push('/admin');
      } catch (error) {
        setError(error.message);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <Paper className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
        <h1 style={{ marginBottom: '2rem' }}>Login</h1>
        <Grid container spacing={4} alignItems='flex-end'>
          <Grid item>
            <Face />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <Controller
              name={'email'}
              isClearable
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    label={'Email'}
                    type='email'
                    fullWidth
                    autoFocus
                    required
                    inputRef={field.ref}
                  />
                </>
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems='flex-end'>
          <Grid item>
            <Fingerprint />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <Controller
              name={'password'}
              isClearable
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    label={'Password'}
                    type='password'
                    fullWidth
                    autoFocus
                    required
                    inputRef={field.ref}
                  />
                </>
              )}
            />
          </Grid>
        </Grid>
        <Grid container alignItems='center' justify='center' style={{ marginTop: '2rem' }}>
          <Button
            type='submit'
            variant='outlined'
            color='primary'
            style={{ textTransform: 'none', width: '80%' }}
          >
            Login
          </Button>
        </Grid>
        {error && (
          <Alert
            className={classes.alert}
            severity='error'
            onClose={() => {
              setError(null);
            }}
          >
            {error}
          </Alert>
        )}
      </form>
    </Paper>
  );
};

export default withRouter(Login);
