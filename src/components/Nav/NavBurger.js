import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBurger = ({ open, setOpen, ...props }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(!expanded);
    // eslint-disable-next-line
  }, [open]);

  return (
    <StyledBurger
      aria-label='Toggle menu'
      aria-expanded={expanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
export default NavBurger;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? theme.primaryHover : theme.primaryLight)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    outline: none;
    :first-child {
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
