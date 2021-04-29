import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../../../DataContext';
import TextFieldCtrl from '../../Controllers/TextFieldCtrl';
import ButtonCtrl from '../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
import { deleteController } from '../../../../../firestore';
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
          readOnly={true}
        />
        <TextFieldCtrl
          name={'endYear'}
          label={'End Year'}
          value={endYear}
          control={control}
          readOnly={true}
        />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'university'}
          label={'University'}
          value={university}
          control={control}
          readOnly={true}
        />
        <TextFieldCtrl
          name={'major'}
          label={'Major'}
          value={major}
          control={control}
          readOnly={true}
        />
        <TextFieldCtrl
          name={'course'}
          label={'Course'}
          value={course}
          control={control}
          readOnly={true}
        />
      </FlexContainer>
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

const FlexContainer = styled.div`
  display: flex;
`;
