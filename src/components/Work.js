import React from 'react';
import styled from 'styled-components';
import { BriefcaseAlt2 } from '@styled-icons/boxicons-solid/BriefcaseAlt2';

const Work = ({ startDate, endDate, position, company, description }) => {
  return (
    <Container>
      <CircleIcon>
        <StyledIcon>
          <BriefcaseAlt2 />
        </StyledIcon>
      </CircleIcon>
      <Line />
      <ContentContainer>
        <TimeBox>
          {startDate} - {endDate}
        </TimeBox>
        <Content>
          <h2>{position}</h2>
          <h2 className='job'>{company}</h2>
          <p>{description}</p>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Work;

const Container = styled.div`
  display: flex;
  max-height: 20rem;
  max-width: 30rem;
  padding: 0.75rem;
`;

const TimeBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 7rem;
  margin-top: 0.25rem;
  //margin-left: 2rem;
  background-color: #252525;
  opacity: 0.8;
  color: #fff;
  font-size: 0.75rem;
  font-weight: lighter;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 1.25rem 1rem 1.25rem; // top right bottom left
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  h2 {
    padding-top: 1rem;
    justify-content: left;
    font-size: 1.15rem;
    color: #fff;
  }
  .job {
    padding-top: 0.25rem;
    justify-content: left;
    font-size: 1.15rem;
    color: #4169e1;
  }
  p {
    color: #fff;
    padding-top: 0.75rem;
    font-size: 0.75rem;
  }
`;

const CircleIcon = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  background: #4169e1;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const StyledIcon = styled.div`
  color: #fff;
  height: 1.75rem;
  width: 1.75rem;
  background: transparent;
  position: absolute;
`;

const Line = styled.div`
  display: flex;
  margin-left: 3.75rem;
  border-left: 2px solid #4169e1;
  height: 100%;
`;
