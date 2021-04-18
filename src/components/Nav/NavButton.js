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
        <StyledIcon iconActive={pathname === path}>{icon}</StyledIcon>
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
  transition: 0.3s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.primaryLight};
    transition: 0.3s ease-in-out;
  }
`;

const CircleIcon = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  padding-left: 0.875rem;
  background: ${({ theme, iconActive }) =>
    iconActive === true ? theme.primaryDark : theme.primaryHover};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Button = styled.div`
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0 4px 10px -6px #111;
  -moz-box-shadow: 0 4px 10px -6px #111;
  box-shadow: 0 4px 10px -6px #111;
  h2 {
    padding-left: 2.75rem;
    opacity: 0;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none !important;
    text-transform: uppercase;
    transition: all 0.1s ease-in-out;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    padding-right: ${({ growWidth }) => `${growWidth + 7}rem;` || '3.5rem;'};
    background: ${({ theme }) => theme.primaryDark};
    h2 {
      padding-left: 3.5rem;
      transition: all 0.3s ease-in-out;
      opacity: 1;
      line-height: 50px;
      font-weight: 500;
      text-transform: uppercase;
    }
    ${CircleIcon} {
      background: ${({ theme }) => theme.primaryDark};
    }
  }
`;
