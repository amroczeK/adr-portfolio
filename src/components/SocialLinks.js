import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Npm } from '@styled-icons/fa-brands/Npm';

const SocialLinks = () => {
  return (
    <Container>
      <i>
        <LinkedinSquare />
      </i>
      <i>
        <Github />
      </i>
      <i>
        <Npm />
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
  //background: pink;
  i {
    margin-top: 1.5rem;
    color: #ddd;
    height: 3rem;
    width: 3rem;
  }
  @media (max-width: 1000px) {
    flex-direction: row;
    margin: 0rem 0rem 0rem 0rem; // top right bottom left
    i {
      margin: 0rem 1.5rem 0rem 1.5rem; // top right bottom left
    }
  }
`;
