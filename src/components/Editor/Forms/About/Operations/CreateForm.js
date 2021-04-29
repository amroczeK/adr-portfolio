import React, { useContext } from 'react';
import { DataContext } from '../../../../../DataContext';
import TextAreaCtrl from '../../Controllers/TextFieldCtrl';
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

const CreateForm = () => {
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
      <h1>EDUCATION</h1>
      <FlexContainer>
        <TextAreaCtrl name={'university'} label={'University'} control={control} />
        <TextAreaCtrl name={'major'} label={'Major'} control={control} />
        <TextAreaCtrl name={'course'} label={'Course'} control={control} />
      </FlexContainer>
      <FlexContainer>
        <TextAreaCtrl name={'startYear'} label={'Start Year'} control={control} />
        <TextAreaCtrl name={'endYear'} label={'End Year'} control={control} />
      </FlexContainer>
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

const FlexContainer = styled.div`
  display: flex;
`;
