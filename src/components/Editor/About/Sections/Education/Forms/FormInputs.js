import React from 'react';
import TextFieldCtrl from '../../../../Controllers/TextFieldCtrl';
import styled from 'styled-components';

const FormInputs = ({ id, university, major, course, startYear, endYear, control, readOnly }) => {
  return (
    <>
      {id && (
        <TextFieldCtrl
          name={'id'}
          label={'Unique Identifier'}
          value={id}
          control={control}
          readOnly={true}
        />
      )}
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
          name={'university'}
          label={'University'}
          value={university}
          control={control}
          readOnly={readOnly}
        />
        <TextFieldCtrl
          name={'major'}
          label={'Major'}
          value={major}
          control={control}
          readOnly={readOnly}
        />
        <TextFieldCtrl
          name={'course'}
          label={'Course'}
          value={course}
          control={control}
          readOnly={readOnly}
        />
      </FlexContainer>
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
`;