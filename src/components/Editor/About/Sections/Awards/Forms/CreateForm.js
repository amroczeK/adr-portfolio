import React, { useContext, useState } from 'react';
import { DataContext } from '../../../../../../DataContext';
import FormInputs from './FormInputs';
import ButtonCtrl from '../../../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: 'transparent',
  },
  tabs: {
    overflow: 'hidden',
    background: '#EEFBFB',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: '100%',
  },
  alert: {
    width: '100%',
  },
});

const CreateForm = ({ title, subtitle, year }) => {
  const classes = useStyles();

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const { onCreate } = useContext(DataContext);

  /**
   * useForm requires a default state/values to avoid the following error:
   * 'A component is changing an uncontrolled input to be controlled.'
   */
  const defaultValues = {
    title: '',
    subtitle: '',
    year: '',
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues,
  });

  const submitHandler = async (data) => {
    try {
      await onCreate({ data, collection: 'awards' });
      setSuccess('Successfully created document.');
      reset(defaultValues);
    } catch (error) {
      setError(error.toString());
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
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
      {success && (
        <Alert
          className={classes.alert}
          severity='success'
          onClose={() => {
            setSuccess(null);
          }}
        >
          {success}
        </Alert>
      )}
      <FormInputs title={title} subtitle={subtitle} year={year} control={control} />
      <Buttons>
        <ButtonCtrl resetHandler={reset} initialState={defaultValues} title={'Create'} />
      </Buttons>
    </form>
  );
};

export default CreateForm;

const Buttons = styled.div`
  display: flex;
`;
