import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { StackOverflow } from '@styled-icons/boxicons-logos/StackOverflow';
import { Npm } from '@styled-icons/fa-brands/Npm';

const SocialLinks = () => {
  return (
    <Container>
      <i>
        <Link
          to={{
            pathname: 'https://www.linkedin.com/in/adrianmroczek/',
          }}
          target='_blank'
        >
          <LinkedinSquare />
        </Link>
      </i>
      <i>
        <Link
          to={{
            pathname: 'https://github.com/amroczeK',
          }}
          target='_blank'
        >
          <Github />
        </Link>
      </i>
      <i>
        <Link
          to={{
            pathname: 'https://stackoverflow.com/users/4134047/adr',
          }}
          target='_blank'
        >
          <StackOverflow />
        </Link>
      </i>
      <i>
        <Link
          to={{
            pathname: 'https://www.npmjs.com/~amroczek90',
          }}
          target='_blank'
        >
          <Npm />
        </Link>
      </i>
    </Container>
  );
};

export default SocialLinks;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem 1.5rem 0rem 3rem; // top right bottom left

  a {
    color: ${({ theme }) => theme.primaryLight};
    transition: 0.3s ease-in-out;
    :hover {
      color: ${({ theme }) => theme.secondaryLight};
      transition: 0.3s ease-in-out;
    }
    -webkit-box-shadow: 0 4px 10px -6px #111;
    -moz-box-shadow: 0 4px 10px -6px #111;
    box-shadow: 0 4px 10px -6px #111;
  }
  i {
    margin-top: 1.5rem;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) and (min-width: 0px) {
    position: absolute;
    bottom: 0;
    flex-direction: row;
    //margin: 0rem 0rem 0rem 0rem; // top right bottom left
    i {
      margin: 5rem 1rem 2rem 1rem; // top right bottom left
      //margin: 0rem 1.5rem 0rem 1.5rem; // top right bottom left
    }
  }
  /* @media only screen and (max-width: 1000px) and (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
  } */
`;
