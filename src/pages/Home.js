import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';
import coding from '../images/coding.jpg';
import { motion } from 'framer-motion';
import { slideInFromLeft, shapeAnimation } from '../animations';

const Home = () => {
  return (
    <>
      <Content variants={slideInFromLeft} initial='hidden' animate='show' exit='exit'>
        <ProfilePic>
          <img src={coding} alt='profile-pic' />
        </ProfilePic>
        <h1>
          - I'M ADRIAN MROCZEK.
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
        </h1>
        <SocialLinks />
      </Content>
      <Cutout variants={shapeAnimation} initial='hidden' animate='show' exit='exit' />
    </>
  );
};

export default Home;

const Cutout = styled(motion.div)`
  background: #4169e1;
  position: fixed;
  height: 200%;
  width: 100%;
  transform: rotate(-345deg);
  left: 130rem;
  top: -50%;
`;

const Content = styled(motion.div)`
  padding: 1rem;
  //background: lightpink;
  display: flex;
  position: absolute;
  top: 35vh;
  left: 12vw;
  right: 3rem;
  //padding-top: 1rem;
  h1 {
    padding-top: 2rem;
    min-width: 25rem;
    color: #4169e1;
  }
  .occupation {
    font-size: 2rem;
    color: white;
  }
  p {
    max-width: 60rem;
  }
  @media (max-width: 1000px) {
    transition: all 0.5s ease-in-out;
    top: 10vh;
    flex-direction: column;
    right: 3rem;
  }
  @media (max-width: 600px) {
    top: 5vh;
    transition: all 0.5s ease-in-out;
    flex-direction: column;
    left: 1rem;
    right: 1rem;
  }
`;

const ProfilePic = styled.div`
  width: 20rem;
  height: 25rem;
  margin-right: 3rem;
  img {
    border-radius: 0.75rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1000px) {
    display: flex;
    background: transparent;
    width: 100%;
    height: 25rem;
    margin-right: 0rem;
    justify-content: center;
    align-items: center;
    img {
      width: 25rem;
      min-width: 20rem;
    }
  }
`;
