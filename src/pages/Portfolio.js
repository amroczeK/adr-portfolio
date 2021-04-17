import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import Project from '../components/Project';
import Shape from '../components/Shape';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInFromLeft, shapeAnimation } from '../animations';

const Portfolio = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Container variants={slideInFromLeft} initial='hidden' animate='show' exit='exit'>
        <Title>
          <h1>PORTFOLIO</h1>
        </Title>
        <Grid>
          {data?.projects?.map(({ title, image, link }) => (
            <Project title={title} image={image} link={link} />
          ))}
        </Grid>
      </Container>
      <Shape variants={shapeAnimation({ rotation: 15 })} />
    </>
  );
};

export default Portfolio;

const Container = styled(motion.div)`
  //background: pink;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1rem 1rem 6rem 1rem; // top right bottom left
  max-width: 95rem;
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

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem 1.5rem 1rem; // top right bottom left
  h1 {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    display: flex;
    align-items: top;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.primaryDark};
    padding-bottom: 5rem;
  }
  h2 {
    letter-spacing: 0.2rem;
    padding: 1rem 0rem 0rem 0rem; // top right bottom left
    font-size: 2rem;
    color: white;
  }
`;

const Grid = styled.div`
  //background: lightgray;
  display: inline-grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
`;
