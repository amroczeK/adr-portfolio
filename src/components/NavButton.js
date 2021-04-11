import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavButton = ({ path, icon, title }) => {
  const { pathname } = useLocation();

  const getTextWidth = (text, font) => {
    // re-use canvas object for better performance
    let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
    let context = canvas.getContext('2d');
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width * 0.063;
  };

  return (
    <Button growWidth={getTextWidth(title, 'lighter 1.25rem Inter')}>
      <CircleIcon iconActive={pathname === path}>
        <h2>{title}</h2>
        <StyledIcon>{icon}</StyledIcon>
      </CircleIcon>
    </Button>
  );
};

export default NavButton;

const StyledIcon = styled.div`
  color: ${({ iconActive }) => (iconActive === true ? '#fff;' : '#ddd;')};
  height: 1.75rem;
  width: 1.75rem;
  background: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleIcon = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  padding-left: 0.875rem;
  background: ${({ iconActive }) => (iconActive === true ? '#4169E1;' : '#2b2a2a;')};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Button = styled.div`
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  h2 {
    padding-left: 2.75rem;
    opacity: 0;
    color: white;
    text-decoration: none !important;
    text-transform: uppercase;
    transition: all 0.1s ease-in-out;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    padding-right: ${({ growWidth }) => `${growWidth + 7}rem;` || '3.5rem;'};
    background: #4169e1;
    h2 {
      padding-left: 3.5rem;
      transition: all 0.3s ease-in-out;
      opacity: 1;
      line-height: 50px;
      font-weight: 500;
      text-transform: uppercase;
    }
    ${CircleIcon} {
      background: #4169e1;
    }
  }
`;
