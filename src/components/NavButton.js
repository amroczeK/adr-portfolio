import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavButton = ({ path, icon, title }) => {
  const { pathname } = useLocation();
  return (
    <Button>
      <CircleIcon iconActive={pathname === path}>
        <h2>{title}</h2>
        <StyledIcon>{icon}</StyledIcon>
      </CircleIcon>
    </Button>
  );
};

export default NavButton;

const StyledIcon = styled.div`
  color: white;
  height: 2rem;
  width: 2rem;
  background: transparent;
  position: absolute;
`;

const CircleIcon = styled.div`
  display: flex;
  height: 3.5rem;
  width: 3.5rem;
  background: ${({ iconActive }) => (iconActive === true ? '#ffc107;' : '#2b2a2a;')};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Button = styled.div`
  border-radius: 30px;
  position: absolute;
  right: 0;
  transition: all 0.3s ease-in-out;
  h2 {
    opacity: 0;
    color: white;
    text-decoration: none !important;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    padding-left: 10rem;
    height: 3.5rem;
    background: #ffc107;
    h2 {
      transition: all 0.3s ease-in-out;
      margin-right: 10rem;
      align-items: center;
      justify-content: center;
      text-align: center;
      opacity: 1;
      color: white;
      line-height: 50px;
      font-weight: 500;
      text-transform: uppercase;
    }
    ${CircleIcon} {
      background: #ffc107;
    }
  }
`;
