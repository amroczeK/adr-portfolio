import React from 'react';
import styled from 'styled-components';
import { School } from '@styled-icons/ionicons-solid/School';
import { Award } from '@styled-icons/fa-solid/Award';

const Certificates = ({ date, certificate, award, subtitle }) => {
  return (
    <Container>
      <CircleIcon>
        <StyledIcon>
          {certificate && <School />}
          {award && <Award />}
        </StyledIcon>
      </CircleIcon>
      <Line />
      <ContentContainer>
        <TimeBox>{date}</TimeBox>
        <Content>
          <h2>{certificate || award}</h2>
          <h2 className='subtitle'>{subtitle}</h2>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Certificates;

const Container = styled.div`
  display: flex;
  padding: 1rem;
  max-width: 30rem;
  @media (max-width: 600px) {
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
  background-color: #252525;
  opacity: 0.8;
  color: #fff;
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
  padding: 1rem 0rem 0.5rem 0rem; // top right bottom left
  h2 {
    justify-content: left;
    font-size: 1.15rem;
    color: #fff;
  }
  .subtitle {
    padding-top: 0.25rem;
    justify-content: left;
    font-size: 1.15rem;
    color: #4169e1;
  }
`;

const CircleIcon = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  background: #4169e1;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  z-index: 10;
  @media (max-width: 600px) {
    display: none;
    transition: 0.5s ease-in-out;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 1.25rem;
  width: 1.25rem;
  background: transparent;
  position: absolute;
  cursor: pointer;
`;

const Line = styled.div`
  display: flex;
  margin-left: 3.75rem;
  border-left: 2px solid #4169e1;
  height: 100%;
  overflow: hidden;
  @media (max-width: 600px) {
    margin-left: 0rem;
    transition: all 0.3s ease-in-out;
  }
`;
