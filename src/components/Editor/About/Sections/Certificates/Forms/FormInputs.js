import React from 'react';
import TextFieldCtrl from '../../../../Controllers/TextFieldCtrl';
import styled from 'styled-components';

const FormInputs = ({ id, title, subtitle, year, createdAt, updatedAt, control }) => {
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
        <TextFieldCtrl name={'title'} label={'Title'} control={control} />
        <TextFieldCtrl name={'subtitle'} label={'Subtitle'} control={control} />
        <TextFieldCtrl name={'year'} label={'Year'} control={control} />
      </FlexContainer>
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
