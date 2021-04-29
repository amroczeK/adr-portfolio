import React, { useContext } from 'react';
import { DataContext } from '../../../../../DataContext';
import FormInputs from './FormInputs';
import ButtonCtrl from '../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
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
});

const DeleteForm = ({ id, university, major, course, startYear, endYear }) => {
  const classes = useStyles();

  const defaultValues = {
    id: id,
    university: university,
    major: major,
    course: course,
    startYear: startYear,
    endYear: endYear,
  };

  const { onDelete } = useContext(DataContext);

  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    onDelete({ data, collection: 'education' });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>EDUCATION</h1>
      <FormInputs
        id={id}
        university={university}
        major={major}
        course={course}
        startYear={startYear}
        endYear={endYear}
        control={control}
        readOnly={true}
      />
      <Buttons>
        <ButtonCtrl title={'Delete'} />
      </Buttons>
    </form>
  );
};

export default DeleteForm;

const Buttons = styled.div`
  display: flex;
`;