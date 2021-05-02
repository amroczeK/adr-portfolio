import React from 'react';
import styled from 'styled-components';
import CreatForm from './Forms/CreateForm';
import UpdateForm from './Forms/UpdateForm';

const Skills = ({ operation, skills }) => {
  return (
    <Container>
      {operation === 0 && <CreatForm />}
      {operation === 1 &&
        skills?.map(({ id, technology, competence, createdAt, updatedAt }) => (
          <UpdateForm
            key={id}
            id={id}
            technology={technology}
            competence={competence}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
        ))}
    </Container>
  );
};

export default Skills;

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
