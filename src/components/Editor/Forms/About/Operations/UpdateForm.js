import React from 'react';
import TextFieldCtrl from '../../Controllers/TextFieldCtrl';
import ButtonCtrl from '../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
import { updateEducation } from '../../../../../firestore';
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

const UpdateForm = ({ id, university, major, course, startYear, endYear }) => {
  const classes = useStyles();

  const defaultValues = {
    id: id,
    university: university,
    major: major,
    course: course,
    startYear: startYear,
    endYear: endYear,
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues,
  });

  const onSubmit = async (data) => {
    // console.log(data);
    await updateEducation({ data });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>EDUCATION</h1>
      <TextFieldCtrl
        name={'id'}
        label={'Unique Identifier'}
        value={id}
        control={control}
        readOnly={true}
      />
      <FlexContainer>
        <TextFieldCtrl
          name={'startYear'}
          label={'Start Year'}
          value={startYear}
          control={control}
        />
        <TextFieldCtrl name={'endYear'} label={'End Year'} value={endYear} control={control} />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'university'}
          label={'University'}
          value={university}
          control={control}
        />
        <TextFieldCtrl name={'major'} label={'Major'} value={major} control={control} />
        <TextFieldCtrl name={'course'} label={'Course'} value={course} control={control} />
      </FlexContainer>
      <Buttons>
        <ButtonCtrl reset={reset} initialState={defaultValues} />
      </Buttons>
    </form>
  );
};

export default UpdateForm;

const Buttons = styled.div`
  display: flex;
`;

const FlexContainer = styled.div`
  display: flex;
`;
