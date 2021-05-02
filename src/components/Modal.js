import React from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { parseNewLines } from './Utils';
import styled from 'styled-components';

const Modal = ({ open, title, image, description, closeModal }) => {
  // Firestore returns strings with multiple lines with \n, need to parse and separate each paragraph
  // into separate elements in an array to dynamically create <p> for each paragraph.
  description = parseNewLines(description);

  return (
    <Container open={open}>
      <Shape open={open}>
        <img src={image} alt='project-img' />
        <Line />
        <Article>
          <h1>{title?.toUpperCase()}</h1>
          {description?.map((desc) => (
            <p>{desc}</p>
          ))}
        </Article>
        <StyledIcon onClick={closeModal}>
          <CloseOutline className='icon' />
        </StyledIcon>
      </Shape>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  height: 100%;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100vw;
    max-height: 100vh;
    z-index: 10;
  }
`;

const Article = styled.article`
  padding: 1.5rem;
  overflow-y: auto;
  margin-bottom: 4rem;
  h1 {
    font-size: 2rem;
    letter-spacing: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.opposingColour};
  }
  p {
    color: ${({ theme }) => theme.primaryLight};
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 3rem;
    padding: 1rem;
    h1 {
      font-size: 1rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;

const Shape = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80vh;
  height: 80vh;
  background: ${({ theme }) => theme.primaryHover};
  border-radius: 0.5rem;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: 0.5s ease;
  z-index: ${({ open }) => (open ? '10' : '-1')};
  overflow: hidden;
  -webkit-box-shadow: 0 4px 10px -6px #111;
  -moz-box-shadow: 0 4px 10px -6px #111;
  box-shadow: 0 4px 10px -6px #111;
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    object-position: 0% 0%;
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      max-height: 15rem;
    }
  }
`;

const StyledIcon = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  cursor: pointer;
  .icon {
    height: 4rem;
    width: 4rem;
    color: ${({ theme }) => theme.opposingColour};
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      height: 3rem;
      width: 3rem;
    }
  }
`;

const Line = styled.hr`
  border: 3px solid ${({ theme }) => theme.opposingColour};
`;
