import React from 'react';
import TextFieldCtrl from '../../../Controllers/TextFieldCtrl';
import TextAreaCtrl from '../../../Controllers/TextAreaCtrl';
import Upload from './Upload';
import styled from 'styled-components';

const FormInputs = ({
  id,
  createdAt,
  updatedAt,
  control,
  imageRefHandler,
}) => {
  return (
    <>
      <FlexContainer>
        {id && (
          <TextFieldCtrl
            name={'id'}
            label={'Unique Identifier'}
            control={control}
            readOnly={true}
          />
        )}
        {createdAt && (
          <TextFieldCtrl
            name={'createdAt'}
            label={'Created On'}
            control={control}
            readOnly={true}
          />
        )}
        {updatedAt && (
          <TextFieldCtrl
            name={'updatedAt'}
            label={'Last Updated'}
            control={control}
            readOnly={true}
          />
        )}
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'title'}
          label={'Title'}
          control={control}
        />
        <TextFieldCtrl
          name={'imageRef'}
          label={'Image Reference'}
          control={control}
          readOnly={true}
        />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'url'}
          label={'URL'}
          control={control}
        />
        <Upload imageRefHandler={imageRefHandler} />
      </FlexContainer>
      <TextAreaCtrl
        name={'description'}
        label={'Description'}
        control={control}
      />
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
