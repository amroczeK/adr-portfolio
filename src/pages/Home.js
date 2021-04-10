import React from 'react';
import styled from 'styled-components';
import coding from '../images/coding.jpg';

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <h1>- I'M ADRIAN MROCZEK.</h1>
        <h1 className='occupation'>FULL STACK DEVELOPER</h1>
        <p>
          Experienced Software Engineer with a background in Full Stack Development, Network
          Engineering and interest in Cyber Security.
        </p>
        <p>
          I've developed scalable and secure applications automating the deployment & configuration
          of Telstra Enterprise services, network elements and developed complex microservice web
          applications enabling a scalable and resilient presentation layer for Telstra's 4G/5G RAN
          Networks.
        </p>
      </Content>
      <ProfilePicture>
        <img src={coding} alt='profile-pic' />
      </ProfilePicture>
      <Cutout />
    </HomeContainer>
  );
};

export default Home;

const Cutout = styled.div`
  background: #4169e1;
  position: fixed;
  height: 200%;
  width: 100%;
  transform: rotate(-345deg);
  left: 130rem;
  top: -50%;
  //z-index: 2;
`;

const HomeContainer = styled.div`
  display: flex;
  //width: 100%;
  //height: 100%;
  //position: absolute;
  //display: flex;
  //z-index: 10;
  //position: relative;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 37.5vh;
  left: 15vw;
  h1 {
    width: 25rem;
    //display: block;
    color: #4169e1;
  }
  .occupation {
    color: white;
  }
  p {
    max-width: 60rem;
  }
`;

const ProfilePicture = styled.div`
  position: fixed;
  margin-top: 3rem;
  margin-left: 3rem;
  right: 3.5rem;
  width: 30vw;
  height: calc(100vh - 6.5rem);
  //min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden; // hides images overflowing over modal borders
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
