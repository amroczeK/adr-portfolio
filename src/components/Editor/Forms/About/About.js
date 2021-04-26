import React, { useState, useContext } from 'react';
import { DataContext } from '../../../../DataContext';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  EducationForm,
  ExperienceForm,
  SkillsForm,
  CertificatesForm,
  AwardsForm,
} from './Sections';
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

const About = () => {
  const classes = useStyles();
  const [input, setInput] = useState(0); // Inputs are the sections of data on page
  const [operation, setOperation] = useState(0); // Operation being performed e.g. CREATE/UPDATE/DELETE

  const { data } = useContext(DataContext);

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
            <Tab value={0} label='Education' />
            <Tab value={1} label='Experience' />
            <Tab value={2} label='Skills' />
            <Tab value={3} label='Certs' />
            <Tab value={4} label='Awards' />
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
          <Tab value={3} label='Delete' />
        </Tabs>
      </Paper>
      {input === 0 && operation === 0 && <EducationForm operation={0} />}
      {input === 0 && operation === 1 && data?.education && (
        <EducationForm operation={1} education={data.education} />
      )}
      {input === 1 && operation === 0 && <ExperienceForm />}
      {input === 2 && operation === 0 && <SkillsForm />}
      {input === 3 && operation === 0 && <CertificatesForm />}
      {input === 4 && operation === 0 && <AwardsForm />}
    </>
  );
};

export default About;
