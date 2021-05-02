import React from 'react';
import TextFieldCtrl from '../../../../Controllers/TextFieldCtrl';
import styled from 'styled-components';

const FormInputs = ({
  id,
  university,
  major,
  course,
  startYear,
  endYear,
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
        />
        <TextFieldCtrl
          name={'endYear'}
          label={'End Year'}
          value={endYear}
          control={control}
        />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'university'}
          label={'University'}
          value={university}
          control={control}
        />
        <TextFieldCtrl
          name={'major'}
          label={'Major'}
          value={major}
          control={control}
        />
        <TextFieldCtrl
          name={'course'}
          label={'Course'}
          value={course}
          control={control}
        />
      </FlexContainer>
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
`;
