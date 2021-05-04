import React from 'react';
import TextFieldCtrl from '../../../../Controllers/TextFieldCtrl';
import styled from 'styled-components';

const FormInputs = ({
  id,
  createdAt,
  updatedAt,
  control,
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
          name={'startYear'}
          label={'Start Year'}
          control={control}
        />
        <TextFieldCtrl
          name={'endYear'}
          label={'End Year'}
          control={control}
        />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'university'}
          label={'University'}
          control={control}
        />
        <TextFieldCtrl
          name={'major'}
          label={'Major'}
          control={control}
        />
        <TextFieldCtrl
          name={'course'}
          label={'Course'}
          control={control}
        />
      </FlexContainer>
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
