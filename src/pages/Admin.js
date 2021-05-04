import React, { useState } from 'react';
import { About, Portfolio, Blogs } from '../components/Editor';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { slideInFromTop } from '../animations';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    background: 'transparent',
    marginTop: '1rem',
  },
  tabs: {
    background: '#EEFBFB',
  },
});

const Admin = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const handlePage = (event, newValue) => {
    setPage(newValue);
  };

  return (
    <>
      <Container variants={slideInFromTop} initial='hidden' animate='show' exit='exit'>
        <Paper className={classes.root}>
          <Tabs
            className={classes.tabs}
            value={page}
            onChange={handlePage}
            indicatorColor='primary'
            textColor='primary'
            centered
          >
            <Tab value={0} label='About' />
            <Tab value={1} label='Portfolio' />
            <Tab value={2} label='Blogs' />
          </Tabs>
          {page === 0 && <About />}
          {page === 1 && <Portfolio />}
          {page === 2 && <Blogs />}
        </Paper>
      </Container>
    </>
  );
};

export default Admin;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 2rem;
  max-width: 100vw;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1.25rem;
    width: 100vw;
    left: 0;
    flex-direction: column;
  }
  @media only screen and (max-width: 1000px) and (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
