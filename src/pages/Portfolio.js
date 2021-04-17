import React from 'react';
import Shape from '../components/Shape';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInFromLeft, shapeAnimation } from '../animations';

const Portfolio = () => {
  return (
    <>
      <Container variants={slideInFromLeft} initial='hidden' animate='show' exit='exit'>
        <h1>PORTFOLIO</h1>
      </Container>
      <Shape variants={shapeAnimation({ rotation: 15 })} />
    </>
  );
};

export default Portfolio;

const Container = styled(motion.div)`
  background: pink;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1rem 1rem 6rem 1rem; // top right bottom left
  max-width: 60rem;
  margin-top: 5rem;
  left: 12vw;
  right: 3rem;
  transition: 0.3s ease-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 0;
    right: 0;
    padding: 0rem 0rem 6rem 0rem; // top right bottom left
    transition: all 0.3s ease-in-out;
  }
`;
