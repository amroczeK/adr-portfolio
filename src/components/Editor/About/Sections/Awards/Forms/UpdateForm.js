import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../../../../../contexts/DataContext';
import FormInputs from './FormInputs';
import ButtonCtrl from '../../../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { convertUnixTimestampToDate } from '../../../../../Utils';
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

const UpdateForm = ({ id, title, subtitle, year, createdAt, updatedAt }) => {
  const classes = useStyles();

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const { onUpdate, onDelete } = useContext(DataContext);

  /**
   * useForm requires a default state/values to avoid the following error:
   * 'A component is changing an uncontrolled input to be controlled.'
   */
  const defaultValues = {
    id,
    title,
    subtitle,
    year,
    createdAt: convertUnixTimestampToDate(createdAt),
    updatedAt: convertUnixTimestampToDate(updatedAt),
  };

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues,
  });

  const updateHandler = async (data) => {
    try {
      await onUpdate({ data, collection: 'awards' });
      setSuccess(`Successfully updated document ${data.id}`);
    } catch (error) {
      setError(error.toString());
    }
  };

  const deleteHandler = async (data) => {
    try {
      await onDelete({ data, collection: 'awards' });
      setSuccess(`Successfully deleted document ${data.id}`);
    } catch (error) {
      setError(error.toString());
    }
  };

  useEffect(() => {
    if (updatedAt) {
      setValue('updatedAt', updatedAt);
    }
    // eslint-disable-next-line
  }, [updatedAt]);

  return (
    <form className={classes.form} onSubmit={handleSubmit(updateHandler)}>
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
      <FormInputs id={id} createdAt={createdAt} updatedAt={updatedAt} control={control} />
      <Buttons>
        <ButtonCtrl
          title={'Update'}
          initialState={defaultValues}
          resetHandler={reset}
          deleteHandler={deleteHandler}
        />
      </Buttons>
    </form>
  );
};

export default UpdateForm;

const Buttons = styled.div`
  display: flex;
`;
