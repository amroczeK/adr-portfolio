import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Project = ({ title, image, link, openModal, index }) => {
  const modalHandler = () => {
    openModal(index);
  };
  return (
    // <Link
    //   to={{
    //     pathname: `${link}`,
    //   }}
    //   target='_blank'
    // >
    <Container onClick={modalHandler}>
      <img src={image} alt='project-img' />
      <Title>
        <h1>{title?.toUpperCase()}</h1>
      </Title>
    </Container>
    // </Link>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  position: relative;
  max-width: 25rem;
  max-height: 15rem;
  background: ${({ theme }) => theme.secondaryLight};
  border-radius: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  -webkit-box-shadow: 0 4px 10px -6px #111;
  -moz-box-shadow: 0 4px 10px -6px #111;
  box-shadow: 0 4px 10px -6px #111;
  img {
    border-radius: 0.5rem;
    padding: 0.25rem;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 1rem;
    margin-right: 1rem;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
  }
`;

const Title = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s ease;
  h1 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.primaryLight};
    letter-spacing: 0.2rem;
  }
  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.secondaryLight};
  }
`;
