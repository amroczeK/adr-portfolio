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

const UpdateForm = ({
  id,
  company,
  position,
  description,
  startYear,
  endYear,
}) => {
  const classes = useStyles();

  const { onUpdate } = useContext(DataContext);

  const defaultValues = {
    id,
    company,
    position,
    description,
    startYear,
    endYear,
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    onUpdate({ data, collection: 'experience' });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>EXPERIENCE</h1>
      <FormInputs
        id={id}
        company={company}
        position={position}
        description={description}
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

export default UpdateForm;

const Buttons = styled.div`
  display: flex;
`;
