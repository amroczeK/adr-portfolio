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
  width: 100%;
  left: 130rem;
  top: -50%;
`;
