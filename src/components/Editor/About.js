import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EducationForm from './Forms/Education';
import ExperienceForm from './Forms/Experience';
import SkillsForm from './Forms/Skills';
import CertificatesForm from './Forms/Certificates';
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
  const [operation, setOperation] = useState(0);
  const [input, setInput] = useState(0);

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
      {input === 0 && operation === 0 && <EducationForm />}
      {input === 1 && operation === 0 && <ExperienceForm />}
      {input === 2 && operation === 0 && <SkillsForm />}
      {input === 3 && operation === 0 && <CertificatesForm />}
    </>
  );
};

export default About;
