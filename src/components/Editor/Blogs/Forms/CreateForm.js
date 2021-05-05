import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../../../contexts/DataContext';
import FormInputs from './FormInputs';
import ButtonCtrl from '../../Controllers/ButtonCtrl';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: 'transparent',
  },
  tabs: {
    overflow: 'hidden',
    background: '#EEFBFB',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: '100%',
  },
  alert: {
    width: '100%',
  },
});

const CreateForm = () => {
  const classes = useStyles();

  /**
   * useForm requires a default state/values to avoid the following error:
   * 'A component is changing an uncontrolled input to be controlled.'
   */
  const defaultValues = {
    title: '',
    description: '',
    imageRef: '',
    fileLocation: '',
    url: '',
  };

  const folderLocation = 'blogs/';

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [imgRef, setImgRef] = useState(null);
  const [fileLoc, setFileLoc] = useState(null);

  const { onCreate } = useContext(DataContext);

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues,
  });

  const submitHandler = async (data) => {
    try {
      await onCreate({ data, collection: 'blogs' });
      setSuccess('Successfully created document.');
      reset(defaultValues);
    } catch (error) {
      setError(error.toString());
    }
  };

  const imageRefHandler = ({ url, filename, error }) => {
    setImgRef(url);
    setFileLoc(`${folderLocation}${filename}`);
    setError(error);
  };

  useEffect(() => {
    if (imgRef) {
      setValue('imageRef', imgRef);
      setValue('fileLocation', fileLoc);
    }
    // eslint-disable-next-line
  }, [imgRef, fileLoc]);

  return (
    <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
      {error && (
        <Alert
          className={classes.alert}
          severity='error'
          onClose={() => {
            setError(null);
          }}
        >
          {error}
        </Alert>
      )}
      {success && (
        <Alert
          className={classes.alert}
          severity='success'
          onClose={() => {
            setSuccess(null);
          }}
        >
          {success}
        </Alert>
      )}
      <FormInputs
        imageRefHandler={imageRefHandler}
        folderLocation={folderLocation}
        control={control}
      />
      <Buttons>
        <ButtonCtrl resetHandler={reset} initialState={defaultValues} title={'Create'} />
      </Buttons>
    </form>
  );
};

export default CreateForm;

const Buttons = styled.div`
  display: flex;
`;
