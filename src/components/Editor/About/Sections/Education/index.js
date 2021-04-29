import React from 'react';
import styled from 'styled-components';
import CreatForm from './Forms/CreateForm';
import UpdateForm from './Forms/UpdateForm';
import DeleteForm from './Forms/DeleteForm';

const Education = ({ operation, education }) => {
  return (
    <Container>
      {operation === 0 && <CreatForm />}
      {operation === 1 &&
        education?.map(({ id, university, major, course, startYear, endYear }) => (
          <UpdateForm
            key={id}
            id={id}
            university={university}
            major={major}
            course={course}
            startYear={startYear}
            endYear={endYear}
          />
        ))}
      {operation === 2 &&
        education?.map(({ id, university, major, course, startYear, endYear }) => (
          <DeleteForm
            key={id}
            id={id}
            university={university}
            major={major}
            course={course}
            startYear={startYear}
            endYear={endYear}
          />
        ))}
    </Container>
  );
};

export default Education;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  min-width: 25rem;
  text-align: left;
  h1 {
    font-size: 1rem;
    font-weight: lighter;
    letter-spacing: 0.15rem;
    color: ${({ theme }) => theme.primaryDark};
    margin: 1rem 0rem 1rem 0.5rem; // top right bottom left
  }
`;
