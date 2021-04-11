import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
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
    color: #ddd;
  }
  i {
    margin-top: 1.5rem;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    flex-direction: row;
    margin: 0rem 0rem 0rem 0rem; // top right bottom left
    i {
      margin: 0rem 1.5rem 0rem 1.5rem; // top right bottom left
    }
  }
`;
