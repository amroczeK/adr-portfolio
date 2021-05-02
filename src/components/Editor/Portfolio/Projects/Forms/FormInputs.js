import React from 'react';
import TextFieldCtrl from '../../../Controllers/TextFieldCtrl';
import TextAreaCtrl from '../../../Controllers/TextAreaCtrl';
import styled from 'styled-components';

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
