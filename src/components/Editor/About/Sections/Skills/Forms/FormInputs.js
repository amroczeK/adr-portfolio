import React from 'react';
import TextFieldCtrl from '../../../../Controllers/TextFieldCtrl';
import styled from 'styled-components';

const FormInputs = ({ id, technology, competence, createdAt, updatedAt, control }) => {
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
          name={'technology'}
          label={'Technology'}
          value={technology}
          control={control}
        />
        <TextFieldCtrl
          name={'competence'}
          label={'Competence'}
          value={competence}
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
