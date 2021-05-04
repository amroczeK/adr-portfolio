import React from 'react';
import TextFieldCtrl from '../../Controllers/TextFieldCtrl';
import TextAreaCtrl from '../../Controllers/TextAreaCtrl';
import Upload from '../../../Upload';
import styled from 'styled-components';

const FormInputs = ({ id, createdAt, updatedAt, control, imageRefHandler, folderLocation }) => {
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
        <TextFieldCtrl name={'url'} label={'URL'} control={control} />
      </FlexContainer>
      <FlexContainer>
        <TextFieldCtrl
          name={'imageRef'}
          label={'Image Reference'}
          control={control}
          readOnly={true}
        />
        <TextFieldCtrl
          name={'fileLocation'}
          label={'File Location'}
          control={control}
          readOnly={true}
        />
      </FlexContainer>
      <Upload imageRefHandler={imageRefHandler} folderLocation={folderLocation} />
      <TextAreaCtrl name={'description'} label={'Description'} control={control} />
    </>
  );
};

export default FormInputs;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
