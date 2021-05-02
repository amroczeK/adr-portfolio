import React from 'react';
import styled from 'styled-components';
import CreatForm from './Forms/CreateForm';
import UpdateForm from './Forms/UpdateForm';

const Experience = ({ operation, experience }) => {
  return (
    <Container>
      {operation === 0 && <CreatForm />}
      {operation === 1 &&
        experience?.map(
          ({ id, company, position, description, startYear, endYear, createdAt, updatedAt }) => (
            <UpdateForm
              key={id}
              id={id}
              company={company}
              position={position}
              description={description}
              startYear={startYear}
              endYear={endYear}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          )
        )}
    </Container>
  );
};

export default Experience;

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
