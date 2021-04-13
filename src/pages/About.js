import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import Work from '../components/Work';
import Shape from '../components/Shape';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInFromLeft, shapeAnimation } from '../animations';

const About = () => {
  const { data } = useContext(DataContext);

  return (
    <Content variants={slideInFromLeft} initial='hidden' animate='show' exit='exit'>
      <Title>
        <h1>
          ABOUT<h1 className='me'>ME</h1>
        </h1>
        <h2>EXPERIENCE</h2>
      </Title>
      <Grid>
        {data &&
          data?.experience?.map((job) => (
            <Work
              startDate={job.startDate}
              endDate={job.endDate}
              position={job.position}
              company={job.company}
              description={job.description}
            />
          ))}
      </Grid>
      <Shape variants={shapeAnimation({ rotation: -15 })} />
    </Content>
  );
};

export default About;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1rem;
  //background: lightpink;
  max-width: 95rem;
  height: 80%;
  top: 10vh;
  left: 12vw;
  right: 3rem;
  @media (max-width: 600px) {
    left: 0;
    right: 0;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    display: flex;
    align-items: top;
    justify-content: center;
    text-align: center;
    color: #4169e1;
    padding-bottom: 1rem;
    .me {
      padding-left: 0.25rem;
      color: white;
    }
  }
  h2 {
    font-size: 2rem;
    color: white;
  }
`;

const Grid = styled.div`
  padding-top: 3rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-rows: auto;
`;
