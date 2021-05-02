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
  university,
  major,
  course,
  startYear,
  endYear,
  createdAt,
  updatedAt,
}) => {
  const classes = useStyles();

  const { onUpdate, onDelete } = useContext(DataContext);

  const defaultValues = {
    id,
    university,
    major,
    course,
    startYear,
    endYear,
    createdAt: convertUnixTimestampToDate(createdAt),
    updatedAt: convertUnixTimestampToDate(updatedAt),
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues,
  });

  const updateHandler = (data) => {
    onUpdate({ data, collection: 'education' });
  };

  const deleteHandler = (data) => {
    onDelete({ data, collection: 'education' });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(updateHandler)}>
      <FormInputs
        id={id}
        university={university}
        major={major}
        course={course}
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
