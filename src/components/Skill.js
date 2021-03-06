import React from 'react';
import styled from 'styled-components';

const Skill = ({ skill, percentage }) => {
  return (
    <Container>
      <h2>
        {skill} <span>{percentage}</span>
      </h2>
      <ProgressBar scroll={percentage} />
    </Container>
  );
};

export default Skill;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryLight};
  width: 15rem;
  h2 {
    font-size: 1rem;
    font-weight: lighter;
  }
  span {
    float: right;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 11.5rem;
    padding: 1rem;
    h2 {
      font-size: 0.75rem;
    }
  }
`;

const ProgressBar = styled.div`
  margin-top: 0.25rem;
  background: #203647;
  height: 6px;
  position: relative;
  &:before {
    content: '';
    background: ${({ theme }) => theme.opposingColour};
    width: ${({ scroll }) => scroll};
    height: 6px;
    position: absolute;
  }
`;
