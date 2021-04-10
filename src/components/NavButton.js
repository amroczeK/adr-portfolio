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

  console.log(getTextWidth(title, 'lighter 1.25rem Inter'));

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
  text-align: left;
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
    //padding-left: 10rem;
    padding-left: ${({ growWidth }) => `${growWidth + 3.25}rem;` || '3.5rem;'};
    height: 3.5rem;
    background: #ffc107;
    h2 {
      padding-left: ${({ growWidth }) => `${growWidth}rem;` || '2rem;'};
      transition: all 0.3s ease-in-out;
      //margin-right: 12rem;
      margin-right: ${({ growWidth }) => `${growWidth + 10}rem;` || '10rem;'};
      /* align-items: center;
      justify-content: center;
      text-align: center; */
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
