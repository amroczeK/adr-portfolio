import React, { useContext } from 'react';
import { DataContext } from '../../../../../../DataContext';
import FormInputs from './FormInputs';
import ButtonCtrl from '../../../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
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
});

const UpdateForm = ({
  id,
  company,
  position,
  startYear,
  endYear,
  description,
  createdAt,
  updatedAt,
}) => {
  const classes = useStyles();

  const { onUpdate, onDelete } = useContext(DataContext);

  /**
   * useForm requires a default state/values to avoid the following error:
   * 'A component is changing an uncontrolled input to be controlled.'
   */
  const defaultValues = {
    id,
    company,
    position,
    startYear,
    endYear,
    description,
    createdAt: convertUnixTimestampToDate(createdAt),
    updatedAt: convertUnixTimestampToDate(updatedAt),
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues,
  });

  const updateHandler = (data) => {
    onUpdate({ data, collection: 'experience' });
  };

  const deleteHandler = (data) => {
    onDelete({ data, collection: 'experience' });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(updateHandler)}>
      <FormInputs
        id={id}
        company={company}
        position={position}
        description={description}
        startYear={startYear}
        endYear={endYear}
        createdAt={createdAt}
        updatedAt={updatedAt}
        control={control}
      />
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
