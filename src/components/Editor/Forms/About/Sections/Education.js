import React from 'react';
import TextAreaCtrl from '../../Controllers/TextFieldCtrl';
import ButtonCtrl from '../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
import { createEducation } from '../../../../../firestore';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import UpdateForm from '../Operations/UpdateForm';

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

/**
 * useForm requires a default state/values to avoid the following error:
 * 'A component is changing an uncontrolled input to be controlled.'
 */
const defaultValues = {
  course: '',
  major: '',
  university: '',
  startYear: '',
  endYear: '',
};

const Education = ({ operation, education }) => {
  const classes = useStyles();

  const { handleSubmit, reset, control } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    console.log(data);
    //await createEducation({ data });
  };

  return (
    <Container>
      {operation === 0 && (
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
      )}
      {operation === 1 &&
        education?.map(({ id, university, major, course, startYear, endYear }, idx) => (
          <UpdateForm
            key={idx}
            id={id}
            university={university}
            major={major}
            course={course}
            startYear={startYear}
            endYear={endYear}
          />
        ))}
    </Container>
  );
};

export default Education;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  min-width: 25rem;
  text-align: left;
  h1 {
    font-size: 1rem;
    font-weight: lighter;
    letter-spacing: 0.15rem;
    color: ${({ theme }) => theme.primaryDark};
    margin: 1rem 0rem 1rem 0.5rem; // top right bottom left
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const FlexContainer = styled.div`
  display: flex;
`;
