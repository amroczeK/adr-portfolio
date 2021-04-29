import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, useForm } from 'react-hook-form';
import { createSkill } from '../../../../../firestore';

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
  textArea: {
    padding: '0.5rem',
    margin: '0.5rem',
    background: '#EEFBFB',
  },
  textField: {
    overflow: 'hidden',
    width: '15rem',
    margin: '0.5rem',
  },
  button: {
    color: '#EEFBFB',
    margin: '0.5rem',
    width: '10rem',
    backgroundColor: '#007CC7',
    '&:hover': {
      background: '#4DA8DA',
    },
  },
});

/**
 * useForm requires a default state/values to avoid the following error:
 * 'A component is changing an uncontrolled input to be controlled.'
 */
const defaultValues = {
  technology: '',
  competence: '',
};

const Skills = () => {
  const classes = useStyles();
  const { handleSubmit, reset, control } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    console.log(data);
    //await addSkill({ data });
  };
  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>TECHNICAL SKILLS</h1>
        <FlexContainer>
          <Controller
            name='technology'
            isClearable
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='filled'
                label={'Technology'}
                className={classes.textField}
                size='small'
              />
            )}
          />
          <Controller
            name='competence'
            isClearable
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='filled'
                label={'Competence'}
                className={classes.textField}
                size='small'
              />
            )}
          />
        </FlexContainer>
        <Buttons>
          <Button type='submit' variant='contained' className={classes.button}>
            Submit
          </Button>
          <Button
            type='button'
            onClick={() => {
              reset(defaultValues);
            }}
            variant='contained'
            className={classes.button}
          >
            Reset
          </Button>
        </Buttons>
      </form>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
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
