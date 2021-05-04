import React from 'react';
import TextFieldCtrl from '../../../../Controllers/TextFieldCtrl';
import TextAreaCtrl from '../../../../Controllers/TextAreaCtrl';
import styled from 'styled-components';

const FormInputs = ({ id, createdAt, updatedAt, control, readOnly }) => {
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
          readOnly={readOnly}
        />
        <TextFieldCtrl name={'endYear'} label={'End Year'} control={control} readOnly={readOnly} />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl name={'company'} label={'Company'} control={control} readOnly={readOnly} />
        <TextFieldCtrl name={'position'} label={'Position'} control={control} readOnly={readOnly} />
      </FlexContainer>
      <TextAreaCtrl
        name={'description'}
        label={'Description'}
        control={control}
        readOnly={readOnly}
      />
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
