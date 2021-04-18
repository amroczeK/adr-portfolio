import React from 'react';
import styled from 'styled-components';

const Modal = ({ open, title, image, description }) => {
  return (
    <Container>
      <Shape open={open}>
        <img src={image} alt='project-img' />
        <Article>
          <h1>{title}</h1>
          {description?.map((desc) => (
            <p>{desc}</p>
          ))}
        </Article>
      </Shape>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Article = styled.article`
  padding: 1.5rem;
  h1 {
    font-size: 2rem;
    letter-spacing: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.primaryBackground};
  }
  p {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const Shape = styled.div`
  width: 80vh;
  height: 80vh;
  background: ${({ theme }) => theme.primaryLight};
  border-radius: 1rem;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: 0.5s ease;
  z-index: ${({ open }) => (open ? '10' : '-1')};
  overflow: hidden;
  -webkit-box-shadow: 0 4px 10px -6px #777;
  -moz-box-shadow: 0 4px 10px -6px #777;
  box-shadow: 0 4px 10px -6px #777;
  img {
    padding: 1rem;
    width: 100%;
    height: 25rem;
    object-fit: cover;
    object-position: 0% 0%;
    -webkit-box-shadow: 0 4px 10px -6px #777;
    -moz-box-shadow: 0 4px 10px -6px #777;
    box-shadow: 0 4px 10px -6px #777;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 20rem;
    }
  }
`;
