import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';
import Shape from '../components/Shape';
import { motion } from 'framer-motion';
import { slideInFromTop, shapeAnimation } from '../animations';

const Contact = () => {
  return (
    <>
      <Container variants={slideInFromTop} initial='hidden' animate='show' exit='exit'>
        <ProfilePic>
          <img src={'/assets/images/coding.jpg'} alt='profile-pic' />
        </ProfilePic>
        <Content>
          <h1>GET IN TOUCH.</h1>
          <p>Feel free to reach out to me on any of the social links provided.</p>
          <p>Contact form coming soon!</p>
        </Content>
        <SocialLinks flexDirection={'row'} margin={'2rem'} />
      </Container>
      <Shape variants={shapeAnimation({ rotation: 15 })} />
    </>
  );
};

export default Contact;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 25vw;
  min-height: 100vh;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1.25rem;
    width: 100vw;
    left: 0;
    flex-direction: column;
  }
  @media only screen and (max-width: 1000px) and (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  h1 {
    letter-spacing: 0.2rem;
    padding-top: 2rem;
    min-width: 23rem;
    color: ${({ theme }) => theme.secondaryLight};
  }
  .occupation {
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryLight};
  }
  p {
    max-width: 60rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 6rem 1rem; // top right bottom left
    h1 {
      font-size: 1.75rem;
      text-align: center;
    }
    .occupation {
      font-size: 1.75rem;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ProfilePic = styled.div`
  display: flex;
  width: 42rem;
  height: 10rem;
  -webkit-box-shadow: 0 4px 10px -6px #111;
  -moz-box-shadow: 0 4px 10px -6px #111;
  box-shadow: 0 4px 10px -6px #111;
  img {
    border-radius: 0.75rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    background: transparent;
    width: 100%;
    margin: 0rem;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
`;
