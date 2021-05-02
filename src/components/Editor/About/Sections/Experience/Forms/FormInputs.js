import React from 'react';
import TextFieldCtrl from '../../../../Controllers/TextFieldCtrl';
import TextAreaCtrl from '../../../../Controllers/TextAreaCtrl';
import styled from 'styled-components';

const FormInputs = ({
  id,
  company,
  position,
  description,
  startYear,
  endYear,
  createdAt,
  updatedAt,
  control,
  readOnly,
}) => {
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
          name={'startYear'}
          label={'Start Year'}
          value={startYear}
          control={control}
          readOnly={readOnly}
        />
        <TextFieldCtrl
          name={'endYear'}
          label={'End Year'}
          value={endYear}
          control={control}
          readOnly={readOnly}
        />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'company'}
          label={'Company'}
          value={company}
          control={control}
          readOnly={readOnly}
        />
        <TextFieldCtrl
          name={'position'}
          label={'Position'}
          value={position}
          control={control}
          readOnly={readOnly}
        />
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
