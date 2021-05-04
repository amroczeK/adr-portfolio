import React from 'react';
import styled from 'styled-components';
import CreatForm from './Forms/CreateForm';
import UpdateForm from './Forms/UpdateForm';

const AwardsForm = ({ operation, awards }) => {
  return (
    <Container>
      {operation === 0 && <CreatForm />}
      {operation === 1 &&
        awards?.map(({ id, title, subtitle, year, createdAt, updatedAt }) => (
          <UpdateForm
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            year={year}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
        ))}
    </Container>
  );
};

export default AwardsForm;

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
