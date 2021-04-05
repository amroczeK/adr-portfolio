import React from 'react';
import styled from 'styled-components';
import profilepic from '../images/profile.jpg';

const Home = () => {
  return (
    <>
      <HomeContainer></HomeContainer>
      <Cutout />
    </>
  );
};

export default Home;

const Cutout = styled.div`
  background: #ffb400;
  position: fixed;
  height: 200%;
  width: 100%;
  transform: rotate(-15deg);
  left: -83%;
  top: -50%;
  z-index: 2;
`;

const HomeContainer = styled.div`
  z-index: 10;
  position: relative;
`;

const ProfilePicture = styled.div`
  background: white;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden; // hides images overflowing over modal borders
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    //padding-top: 1.5rem;
    //padding-bottom: 2rem;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  //padding: 5rem 10rem;
  min-height: 90vh;
  flex: 1;
  overflow: hidden;
  z-index: 2; // Move text in front of Wave.js
  background: white;
  img {
    width: 50%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 1300px) {
      margin-top: 3rem;
    }
  }
`;
