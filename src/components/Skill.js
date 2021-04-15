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
  //background: lightgray;
  padding: 1.5rem;
  color: #fff;
  width: 15rem;
  h2 {
    font-size: 1rem;
    font-weight: lighter;
  }
  span {
    float: right;
  }
  @media (max-width: 400px) {
    padding: 0.75rem;
  }
`;

const ProgressBar = styled.div`
  margin-top: 0.25rem;
  background: #191923;
  height: 6px;
  position: relative;
  &:before {
    content: '';
    background: #ffc107;
    width: ${({ scroll }) => scroll};
    height: 6px;
    position: absolute;
  }
`;
