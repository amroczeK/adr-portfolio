import React from 'react';
// import Button from '../../Inputs/Button';
// import TextArea from '../../Inputs/TextArea';
// import TextField from '../../Inputs/TextField';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, useForm } from 'react-hook-form';

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
    width: '40rem',
    background: '#EEFBFB',
  },
  textField: {
    //height: '2rem',
    overflow: 'hidden',
    //background: '#EEFBFB',
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
  company: '',
  position: '',
  startYear: '',
  endYear: '',
  description: '',
};

const Experience = () => {
  const classes = useStyles();
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });

  return (
    <Container>
      <form
        className={classes.form}
        onSubmit={handleSubmit((data) => {
          console.log(JSON.stringify(data));
          alert(JSON.stringify(data));
        })}
      >
        <h1>WORK EXPERIENCE</h1>
        <FlexContainer>
          <Controller
            name='company'
            isClearable
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='filled'
                label={'Company'}
                className={classes.textField}
                size='small'
              />
            )}
          />
          <Controller
            name='position'
            isClearable
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='filled'
                label={'Position'}
                className={classes.textField}
                size='small'
              />
            )}
          />
        </FlexContainer>
        <FlexContainer>
          <Controller
            name='startYear'
            isClearable
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='filled'
                label={'Start Year'}
                className={classes.textField}
                size='small'
              />
            )}
          />
          <Controller
            name='endYear'
            isClearable
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='filled'
                label={'End Year'}
                className={classes.textField}
                size='small'
              />
            )}
          />
        </FlexContainer>
        <Controller
          name='description'
          isClearable
          control={control}
          render={({ field }) => (
            <TextareaAutosize
              {...field}
              rowsMin={10}
              placeholder='Type item description here...'
              className={classes.textArea}
            />
          )}
        />
        <Buttons>
          <Button type={'submit'} variant='contained' className={classes.button}>
            Submit
          </Button>
          <Button type={'reset'} variant='contained' className={classes.button}>
            Reset
          </Button>
        </Buttons>
      </form>
    </Container>
  );
};

export default Experience;

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
