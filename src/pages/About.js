import React from 'react';
import Shape from '../components/Shape';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInFromLeft, shapeAnimation } from '../animations';

const About = () => {
  return (
    <Content variants={slideInFromLeft} initial='hidden' animate='show' exit='exit'>
      <h1>Education</h1>
      <h1>Certifications</h1>
      <h1>Awards</h1>
      <h1>Work History</h1>
      <Shape variants={shapeAnimation({ rotation: -15 })} />
    </Content>
  );
};

export default About;

const Content = styled(motion.div)`
  display: flex;
  position: absolute;
  padding: 1rem;
  background: lightpink;
  width: 60%;
  height: 80%;
  top: 10vh;
  left: 12vw;
  right: 3rem;
  h1 {
    margin-right: 2rem;
    color: #4169e1;
  }
`;
