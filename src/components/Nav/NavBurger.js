import React from 'react';
import styled from 'styled-components';

const NavBurger = ({ open, setOpen }) => {
  return (
    <Container>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
    </Container>
  );
};
export default NavBurger;

const Container = styled.div`
  display: flex;
  position: fixed;
  background: ${({ theme }) => theme.primaryBackground};
  margin-top: 1rem;
  margin-left: 1rem;
  height: 3rem;
  width: 3rem;
  z-index: 10;
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    outline: none;
    :first-child {
      width: ${({ open }) => (open ? '2.05rem' : '2rem')};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
