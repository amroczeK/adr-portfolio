import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Npm } from '@styled-icons/fa-brands/Npm';

const Footer = () => {
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

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
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
    margin: 5rem 1rem 2rem 1rem; // top right bottom left
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
`;
