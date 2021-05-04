import React from 'react';
import styled from 'styled-components';

const Blog = ({ title, imageRef, description }) => {
  return (
    <Container>
      <Image>
        <img src={imageRef} alt='blog-img' />
      </Image>
      <Line />
      <Content>
        <h1>{title?.toUpperCase()}</h1>
        <p>{description.slice(0, 70) + '...'}</p>
      </Content>
    </Container>
  );
};

export default Blog;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 21.875rem;
  max-height: 25.9375rem;
  background: ${({ theme }) => theme.primaryHover};
  -webkit-box-shadow: 0 4px 10px -6px #111;
  -moz-box-shadow: 0 4px 10px -6px #111;
  box-shadow: 0 4px 10px -6px #111;
  border-radius: 0.25rem;
  overflow: hidden;
  &:hover {
    h1 {
      color: ${({ theme }) => theme.opposingColour};
    }
    img {
      transition: 0.3s ease;
      transform: scale(1.5);
    }
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
  img {
    transition: 0.5s ease;
    height: 100%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin: 1.5rem 1rem 1.5rem 1rem; // top right bottom left
  cursor: pointer;
  h1 {
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.primaryLight};
  }
  p {
    font-size: 1rem;
  }
`;

const Line = styled.hr`
  border: 3px solid ${({ theme }) => theme.opposingColour};
`;
