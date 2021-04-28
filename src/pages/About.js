import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import Education from '../components/Education';
import Work from '../components/Work';
import Skill from '../components/Skill';
import Certificates from '../components/Certificates';
import Shape from '../components/Shape';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInFromTop, shapeAnimation } from '../animations';

const About = () => {
  const { appData } = useContext(DataContext);

  // Sort skills alphabetically
  const sortedSkills = appData?.skills?.sort((a, b) => a.technology.localeCompare(b.technology));

  return (
    <>
      <Container variants={slideInFromTop} initial='hidden' animate='show' exit='exit'>
        <Title>
          <h1>
            ABOUT<h1 className='me'>ME</h1>
          </h1>
          <h2>EDUCATION</h2>
        </Title>
        <EducationGrid>
          {appData?.education?.map(({ startDate, endDate, university, major, course }) => (
            <Education
              startDate={startDate}
              endDate={endDate}
              university={university}
              major={major}
              course={course}
            />
          ))}
        </EducationGrid>
        <Title>
          <h2>WORK HISTORY</h2>
        </Title>
        <WorkGrid>
          {appData?.experience?.map((job, idx) => (
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
          <h2>TECHNICAL SKILLS & COMPETENCE</h2>
        </Title>
        <SkillsGrid>
          {sortedSkills?.map(({ technology, competence }) => (
            <Skill skill={technology} percentage={competence} />
          ))}
        </SkillsGrid>
        <Title>
          <h2>CERTIFICATES & AWARDS</h2>
        </Title>
        <CertificatesGrid>
          {appData?.certificates?.map(({ date, award, certificate, subtitle }) => (
            <Certificates award={award} date={date} certificate={certificate} subtitle={subtitle} />
          ))}
        </CertificatesGrid>
        <Footer />
      </Container>
      <Shape variants={shapeAnimation({ rotation: -15 })} />
    </>
  );
};

export default About;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-height: 100%;
  max-width: 95rem;
  left: 12vw;
  right: 3rem;
  transition: 0.3s ease-out;
  padding-bottom: 10rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  padding: 0rem 1rem 1.5rem 1rem; // top right bottom left
  h1 {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    display: flex;
    align-items: top;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.secondaryLight};
    padding-bottom: 2rem;
    .me {
      padding-left: 0.25rem;
      color: ${({ theme }) => theme.primaryLight};
    }
  }
  h2 {
    text-align: center;
    letter-spacing: 0.2rem;
    padding: 1rem 0rem 0rem 0rem; // top right bottom left
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryLight};
  }
`;

const WorkGrid = styled.div`
  display: inline-grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
    gap: 0rem;
  }
`;

const SkillsGrid = styled.div`
  display: inline-grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 0rem;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  }
`;

const EducationGrid = styled.div`
  display: inline-grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 0rem;
    justify-items: left;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;
