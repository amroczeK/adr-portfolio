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
        <TextFieldCtrl name={'title'} label={'Title'} value={title} control={control} />
        <TextFieldCtrl name={'subtitle'} label={'Subtitle'} value={subtitle} control={control} />
        <TextFieldCtrl name={'year'} label={'Year'} value={year} control={control} />
      </FlexContainer>
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
`;
