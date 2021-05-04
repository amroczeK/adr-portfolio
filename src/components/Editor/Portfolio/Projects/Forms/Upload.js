import React, { useState, useEffect } from 'react';
import useStorage from '../../../../../hooks/useStorage';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
  button: {
    color: '#EEFBFB',
    margin: '0.5rem',
    height: '2rem',
    width: '10rem',
    backgroundColor: '#007CC7',
    '&:hover': {
      background: '#4DA8DA',
    },
  },
});

const Upload = ({ imageRefHandler, folderLocation }) => {
  const classes = useStyles();

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const { url, progress } = useStorage({ file, folderLocation });

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected) {
      setFile(selected);
    } else {
      setFile(null);
      setError('Select an image to upload.');
    }
  };

  useEffect(() => {
    if (url) {
      setFile(null);
      imageRefHandler({ url, filename: file.name, error });
    }
    // eslint-disable-next-line
  }, [url]);

  return (
    <>
      <Container>
        {file && <h2>{file.name}</h2>}
        <Container className='buttons'>
          <Button variant='contained' component='label' className={classes.button}>
            Upload File
            <input type='file' name='image' accept='image/*' hidden onChange={changeHandler} />
          </Button>
          {file && (
            <Box position='relative' display='inline-flex'>
              <CircularProgress
                variant='determinate'
                value={progress}
                className={classes.progress}
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position='absolute'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <Typography variant='caption' component='div' color='textSecondary'>{`${Math.round(
                  progress
                )}%`}</Typography>
              </Box>
            </Box>
          )}
        </Container>
      </Container>
    </>
  );
};

export default Upload;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 0.75rem;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-space-evenly;
  }
`;
