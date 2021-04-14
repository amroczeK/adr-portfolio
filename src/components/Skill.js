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
  color: #fff;
  h2 {
    font-size: 1rem;
    font-weight: lighter;
  }
  span {
    float: right;
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
