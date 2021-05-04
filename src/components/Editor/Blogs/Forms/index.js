import React from 'react';
import styled from 'styled-components';
import CreatForm from './CreateForm';
import UpdateForm from './UpdateForm';

const BlogsForm = ({ operation, blogs }) => {
  return (
    <Container>
      {operation === 0 && <CreatForm />}
      {operation === 1 &&
        blogs?.map(
          ({ id, title, description, imageRef, fileLocation, url, createdAt, updatedAt }) => (
            <UpdateForm
              key={id}
              id={id}
              title={title}
              description={description}
              imageRef={imageRef}
              fileLocation={fileLocation}
              url={url}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          )
        )}
    </Container>
  );
};

export default BlogsForm;

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
