import React from 'react';
import styled from 'styled-components';
import profilepic from '../images/profile.jpg';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <ProfilePicture>
          <img src={profilepic} alt='profile-pic' />
        </ProfilePicture>
      </HomeContainer>
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
  //z-index: 2;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  //display: flex;
  //z-index: 10;
  //position: relative;
`;

const ProfilePicture = styled.div`
  position: fixed;
  margin-top: 3rem;
  margin-left: 3rem;
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
