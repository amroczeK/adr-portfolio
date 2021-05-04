import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../../../../DataContext';
import FormInputs from './FormInputs';
import ButtonCtrl from '../../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
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

const CreateForm = () => {
  const classes = useStyles();

  /**
   * useForm requires a default state/values to avoid the following error:
   * 'A component is changing an uncontrolled input to be controlled.'
   */
  const defaultValues = {
    title: '',
    description: '',
    imageRef: '',
    url: '',
  };

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [imgRef, setImgRef] = useState(null);

  const { onCreate } = useContext(DataContext);

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues,
  });

  const submitHandler = async (data) => {
    try {
      await onCreate({ data, collection: 'projects' });
      setSuccess('Successfully created document.');
      reset(defaultValues);
    } catch (error) {
      setError(error.toString());
    }
  };

  const imageRefHandler = (ref) => {
    setImgRef(ref);
  };

  useEffect(() => {
    if (imgRef) {
      setValue('imageRef', imgRef);
    }
    // eslint-disable-next-line
  }, [imgRef]);

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
      <FormInputs
        imageRefHandler={imageRefHandler}
        control={control}
      />
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
