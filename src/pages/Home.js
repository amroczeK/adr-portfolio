import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';
import Shape from '../components/Shape';
import { motion } from 'framer-motion';
import { slideInFromLeft, shapeAnimation } from '../animations';

const Home = () => {
  return (
    <>
      <Container variants={slideInFromLeft} initial='hidden' animate='show' exit='exit'>
        <ProfilePic>
          <img src={'/assets/images/coding.jpg'} alt='profile-pic' />
        </ProfilePic>
        <Content>
          <h1>- I'M ADRIAN MROCZEK.</h1>
          <h1 className='occupation'>FULL STACK DEVELOPER</h1>
          <p>
            Experienced Software Engineer with a background in Full Stack Development, Network
            Engineering and interest in Cyber Security.
            <p>
              I've developed scalable and secure applications automating the deployment &
              configuration of Telstra Enterprise services, network elements and developed complex
              microservice web applications enabling a scalable and resilient presentation layer for
              Telstra's 4G/5G RAN Networks.
            </p>
          </p>
        </Content>
        <SocialLinks />
      </Container>
      <Shape variants={shapeAnimation({ rotation: 15 })} />
    </>
  );
};

export default Home;

const Container = styled(motion.div)`
  background: pink;
  display: flex;
  position: absolute;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  //top: 33.5vh;
  left: 12vw;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 0;
    padding-top: 6rem;
    flex-direction: column;
  }
`;

const Content = styled.div`
  h1 {
    letter-spacing: 0.2rem;
    padding-top: 2rem;
    min-width: 25rem;
    color: ${({ theme }) => theme.primaryDark};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      text-align: center;
    }
  }
  .occupation {
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryLight};
  }
  p {
    max-width: 60rem;
  }
`;

const ProfilePic = styled.div`
  width: 20rem;
  height: 25rem;
  margin-right: 3rem;
  -webkit-box-shadow: 0 4px 10px -6px #111;
  -moz-box-shadow: 0 4px 10px -6px #111;
  box-shadow: 0 4px 10px -6px #111;
  img {
    border-radius: 0.75rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    background: transparent;
    width: 100%;
    height: 25rem;
    margin-right: 0rem;
    justify-content: center;
    align-items: center;
    /* img {
      width: 25rem;
      min-width: 20rem;
    } */
  }
`;
