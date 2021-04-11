import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';
import Shape from '../components/Shape';
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
      <Shape variants={shapeAnimation({ rotation: 15 })} />
    </>
  );
};

export default Home;

const Content = styled(motion.div)`
  display: flex;
  position: absolute;
  //background: pink;
  padding: 1.5rem;
  //min-width: 90%;
  top: 33.5vh;
  left: 12vw;
  //right: 3rem;
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
    //right: 3rem;
  }
  @media (max-width: 600px) {
    left: 0;
    top: 0;
    bottom: 0;
    padding-top: 3rem;
    transition: all 0.5s ease-in-out;
    flex-direction: column;
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
