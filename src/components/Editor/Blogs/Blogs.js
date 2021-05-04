import React, { useState, useContext } from 'react';
import { DataContext } from '../../../DataContext';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BlogsForm from './Forms';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: 'transparent',
  },
  tabs: {
    overflow: 'hidden',
    background: '#EEFBFB',
  },
});

const Blogs = () => {
  const classes = useStyles();
  const [input, setInput] = useState(0); // Inputs are the sections of data on page
  const [operation, setOperation] = useState(0); // Operation being performed e.g. CREATE/UPDATE

  const { appData } = useContext(DataContext);

  const handleOperation = (event, newValue) => {
    setOperation(newValue);
  };

  const handleInput = (event, newValue) => {
    setInput(newValue);
  };
  return (
    <>
      <Paper className={classes.root}>
        <Paper className={classes.root}>
          <Tabs
            className={classes.tabs}
            value={input}
            onChange={handleInput}
            indicatorColor='primary'
            textColor='primary'
            centered
          >
            <Tab value={0} label='Blogs' />
          </Tabs>
        </Paper>
        <Tabs
          className={classes.tabs}
          value={operation}
          onChange={handleOperation}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab value={0} label='Create' />
          <Tab value={1} label='Update' />
        </Tabs>
      </Paper>
      {input === 0 && operation === 0 && <BlogsForm operation={0} />}
      {input === 0 && operation === 1 && appData?.blogs && (
        <BlogsForm operation={1} blogs={appData.blogs} />
      )}
    </>
  );
};

export default Blogs;
