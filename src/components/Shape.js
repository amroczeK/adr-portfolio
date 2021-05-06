import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Shape = ({ variants }) => {
  return <Rectangle variants={variants} initial='hidden' animate='show' exit='exit'></Rectangle>;
};

export default Shape;

const Rectangle = styled(motion.div)`
  background: ${({ theme }) => theme.primaryDark};
  position: fixed;
  height: 200%;
  width: 50rem;
  //width: 100%;
  left: 130rem;
  //right: 0;
  top: -50%;
  z-index: -1;
  @media only screen and (max-width: 1920px) {
    left: 110rem;
  }
  @media only screen and (max-width: 1600px) {
    display: none;
  }
`;
