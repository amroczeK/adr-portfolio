import React, { useContext } from 'react';
import { DataContext } from '../../../../../../DataContext';
import FormInputs from './FormInputs';
import ButtonCtrl from '../../../../Controllers/ButtonCtrl';
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

const CreateForm = ({ university, major, course, startYear, endYear }) => {
  const classes = useStyles();

  const { onCreate } = useContext(DataContext);

  /**
   * useForm requires a default state/values to avoid the following error:
   * 'A component is changing an uncontrolled input to be controlled.'
   */
  const defaultValues = {
    university: '',
    major: '',
    course: '',
    startYear: '',
    endYear: '',
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    onCreate({ data, collection: 'education' });
    reset(defaultValues);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormInputs
        university={university}
        major={major}
        course={course}
        startYear={startYear}
        endYear={endYear}
        control={control}
        readOnly={false}
      />
      <Buttons>
        <ButtonCtrl reset={reset} initialState={defaultValues} />
      </Buttons>
    </form>
  );
};

export default CreateForm;

const Buttons = styled.div`
  display: flex;
`;