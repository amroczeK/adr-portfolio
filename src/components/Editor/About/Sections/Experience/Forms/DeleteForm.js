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

const DeleteForm = ({ id, company, position, startYear, endYear, description }) => {
  const classes = useStyles();

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
  };

  const { onDelete } = useContext(DataContext);

  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    //onDelete({ data, collection: 'experience' });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormInputs
        id={id}
        company={company}
        position={position}
        description={description}
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
