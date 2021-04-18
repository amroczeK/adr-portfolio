import React, { useState } from 'react';
import styled from 'styled-components';
import { BriefcaseAlt2 } from '@styled-icons/boxicons-solid/BriefcaseAlt2';
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore';

const Work = ({ startDate, endDate, position, company, description }) => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      <CircleIcon>
        <StyledIcon>
          <BriefcaseAlt2 />
        </StyledIcon>
      </CircleIcon>
      <Line expand={expand} />
      <ContentContainer>
        <TimeBox>
          {startDate} - {endDate}
        </TimeBox>
        <Content>
          <h2>{position}</h2>
          <h2 className='job'>{company}</h2>
          {description?.map((paragraph, idx) =>
            idx === 0 ? (
              <p expand={expand}>{expand ? paragraph : paragraph.slice(0, 70) + '...'}</p>
            ) : (
              expand && <p expand={expand}>{paragraph}</p>
            )
          )}
        </Content>
        <ExpandIcon onClick={expandHandler}>
          <ExpandMore />
        </ExpandIcon>
      </ContentContainer>
    </Container>
  );
};

export default Work;

const Container = styled.div`
  display: flex;
  padding: 1rem;
  min-width: 30rem;
  @media (max-width: 600px) {
    max-width: 25rem;
    padding: 0.75rem;
    transition: all 0.3s ease-in-out;
  }
`;

const TimeBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 7rem;
  margin-top: 0.25rem;
  background-color: ${({ theme }) => theme.primaryDark};
  opacity: 0.8;
  color: ${({ theme }) => theme.primaryLight};
  font-size: 0.75rem;
  font-weight: lighter;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  flex-direction: column;
  padding: 0.25rem 1.25rem 0rem 1.25rem; // top right bottom left
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  transition: 0.5s ease-in-out;
  opacity: 1;
  h2 {
    padding-top: 1rem;
    justify-content: left;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.primaryLight};
  }
  .job {
    padding-top: 0.25rem;
    padding-bottom: 0.5rem;
    justify-content: left;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.secondaryLight};
  }
  p {
    transition: 0.5s ease-in-out;
    padding-top: 0.25rem;
    color: ${({ theme }) => theme.primaryLight};
    font-size: 0.75rem;
  }
`;

const CircleIcon = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  background: ${({ theme }) => theme.primaryDark};
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  z-index: 10;
  @media (max-width: 600px) {
    display: none;
    transition: 0.5s ease-in-out;
  }
`;

const ExpandIcon = styled.div`
  height: 1.75rem;
  width: 1.75rem;
  color: ${({ theme }) => theme.primaryLight};
  background: ${({ theme }) => theme.primaryDark};
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryLight};
  height: 1.5rem;
  width: 1.5rem;
  background: transparent;
  position: absolute;
  cursor: pointer;
`;

const Line = styled.div`
  display: flex;
  margin-left: 3.75rem;
  border-left: 2px solid ${({ theme }) => theme.primaryDark};
  height: ${({ expand }) => (expand ? '100%' : '11.75rem')};
  overflow: hidden;
  @media (max-width: 600px) {
    margin-left: 0rem;
    transition: all 0.3s ease-in-out;
    height: 100%;
  }
`;
