import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import Blog from '../components/Blog';
import Shape from '../components/Shape';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInFromLeft, shapeAnimation } from '../animations';

const Blogs = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Container variants={slideInFromLeft} initial='hidden' animate='show' exit='exit'>
        <Title>
          <h1>BLOGS</h1>
        </Title>
        <Grid>
          {data?.blogs?.map(({ title, image, link, description }) => (
            <Blog title={title} image={image} link={link} description={description} />
          ))}
        </Grid>
        <Footer />
      </Container>
      <Shape variants={shapeAnimation({ rotation: -15 })} />
    </>
  );
};

export default Blogs;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-height: 100%;
  max-width: 95rem;
  padding-bottom: 10rem;
  left: 12vw;
  right: 3rem;
  transition: 0.3s ease-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 1rem 1.5rem 1rem; // top right bottom left
  h1 {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    display: flex;
    align-items: top;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.secondaryLight};
    padding-bottom: 5rem;
  }
  h2 {
    letter-spacing: 0.2rem;
    padding: 1rem 0rem 0rem 0rem; // top right bottom left
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryLight};
  }
`;

const Grid = styled.div`
  display: inline-grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
`;
