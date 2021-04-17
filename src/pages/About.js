import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import Education from '../components/Education';
import Work from '../components/Work';
import Skill from '../components/Skill';
import Certificates from '../components/Certificates';
import Shape from '../components/Shape';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInFromLeft, shapeAnimation } from '../animations';

const About = () => {
  const { data } = useContext(DataContext);

  return (
    <Content variants={slideInFromLeft} initial='hidden' animate='show' exit='exit'>
      <Title>
        <h1>
          ABOUT<h1 className='me'>ME</h1>
        </h1>
        <h2>EDUCATION</h2>
      </Title>
      <EducationGrid>
        {data &&
          data?.education?.map(({ startDate, endDate, university, major, course }) => (
            <Education
              startDate={startDate}
              endDate={endDate}
              university={university}
              major={major}
              course={course}
            />
          ))}
      </EducationGrid>
      {/* <Line /> */}
      <Title>
        <h2>WORK HISTORY</h2>
      </Title>
      <WorkGrid>
        {data &&
          data?.experience?.map((job, idx) => (
            <Work
              key={idx}
              startDate={job.startDate}
              endDate={job.endDate}
              position={job.position}
              company={job.company}
              description={job.description}
            />
          ))}
      </WorkGrid>
      <Title>
        <h2>TECHNICAL SKILLS</h2>
      </Title>
      <SkillsGrid>
        {data &&
          data?.skills?.map(({ technology, competence }) => (
            <Skill skill={technology} percentage={competence} />
          ))}
      </SkillsGrid>
      <Title>
        <h2>CERTIFICATES & AWARDS</h2>
      </Title>
      <CertificatesGrid>
        {data &&
          data?.certificates?.map(({ date, award, certificate, subtitle }) => (
            <Certificates award={award} date={date} certificate={certificate} subtitle={subtitle} />
          ))}
      </CertificatesGrid>
      <Shape variants={shapeAnimation({ rotation: -15 })} />
    </Content>
  );
};

export default About;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1rem 1rem 6rem 1rem; // top right bottom left
  max-width: 95rem;
  margin-top: 5rem;
  left: 12vw;
  right: 3rem;
  transition: 0.3s ease-out;
  @media (max-width: 600px) {
    left: 0;
    right: 0;
    padding: 0rem 0rem 6rem 0rem; // top right bottom left
    transition: all 0.3s ease-in-out;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 1.5rem 1rem; // top right bottom left
  h1 {
    font-size: 3rem;
    display: flex;
    align-items: top;
    justify-content: center;
    text-align: center;
    color: #4169e1;
    padding-bottom: 2rem;
    .me {
      padding-left: 0.25rem;
      color: white;
    }
  }
  h2 {
    padding: 1rem 0rem 0rem 0rem; // top right bottom left
    font-size: 2rem;
    color: white;
  }
`;

const WorkGrid = styled.div`
  display: inline-grid;
  gap: 1rem;
  padding-bottom: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  @media only screen and (max-width: 600px) {
    gap: 0rem;
  }
`;

const SkillsGrid = styled.div`
  display: inline-grid;
  gap: 1rem;
  padding-bottom:3rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  @media only screen and (max-width: 600px) {
    gap: 0rem;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
`;

const EducationGrid = styled.div`
  display: inline-grid;
  gap: 1rem;
  padding-bottom: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  @media only screen and (max-width: 600px) {
    gap: 0rem;
    justify-items: left;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;

const CertificatesGrid = styled.div`
  display: inline-grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: auto;
  @media only screen and (max-width: 600px) {
    gap: 0rem;
    justify-items: left;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;

const Line = styled.hr`
  border: 1px dashed #ffff;
  opacity: 0.1;
`;
