import React from 'react';
import Button from '@material-ui/core/Button';
import TextFieldCtrl from '../../../Controllers/TextFieldCtrl';
import TextAreaCtrl from '../../../Controllers/TextAreaCtrl';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
  button: {
    color: '#EEFBFB',
    margin: '0.5rem',
    height: '3rem',
    width: '10rem',
    backgroundColor: '#007CC7',
    '&:hover': {
      background: '#4DA8DA',
    },
  },
});

const FormInputs = ({
  id,
  title,
  description,
  imageRef,
  url,
  createdAt,
  updatedAt,
  control,
  readOnly,
}) => {
  const classes = useStyles();
  return (
    <>
      <FlexContainer>
        {id && (
          <TextFieldCtrl
            name={'id'}
            label={'Unique Identifier'}
            value={id}
            control={control}
            readOnly={true}
          />
        )}
        {createdAt && (
          <TextFieldCtrl
            name={'createdAt'}
            label={'Created On'}
            value={createdAt}
            control={control}
            readOnly={true}
          />
        )}
        {updatedAt && updatedAt !== '' && (
          <TextFieldCtrl
            name={'updatedAt'}
            label={'Last Updated'}
            value={updatedAt}
            control={control}
            readOnly={true}
          />
        )}
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'title'}
          label={'Title'}
          value={title}
          control={control}
          readOnly={readOnly}
        />
        <TextFieldCtrl
          name={'imageRef'}
          label={'Image Reference'}
          value={imageRef}
          control={control}
          readOnly={readOnly}
        />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'url'}
          label={'URL'}
          value={url}
          control={control}
          readOnly={readOnly}
        />
        <Button variant='contained' component='label' className={classes.button}>
          Upload File
          <input type='file' hidden />
        </Button>
      </FlexContainer>
      <TextAreaCtrl
        name={'description'}
        label={'Description'}
        value={description}
        control={control}
        readOnly={readOnly}
      />
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
`;
