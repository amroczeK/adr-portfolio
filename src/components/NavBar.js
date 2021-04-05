import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '@styled-icons/fa-solid/Home';
import { Person } from '@styled-icons/fluentui-system-filled/Person';
import { BriefcaseAlt2 } from '@styled-icons/boxicons-solid/BriefcaseAlt2';
import { Article } from '@styled-icons/material/Article';
import { MessageDetail } from '@styled-icons/boxicons-solid/MessageDetail';

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to='/'>
            <NavButton>
              <CircleIcon iconActive={pathname === '/'}>
                <StyledIcon>
                  <Home />
                </StyledIcon>
                {/* <h2>HOME</h2> */}
              </CircleIcon>
            </NavButton>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <NavButton>
              <CircleIcon iconActive={pathname === '/about'}>
                <StyledIcon>
                  <Person />
                </StyledIcon>
              </CircleIcon>
            </NavButton>
          </Link>
        </li>
        <li>
          <Link to='/portfolio'>
            <NavButton>
              <CircleIcon iconActive={pathname === '/portfolio'}>
                <StyledIcon>
                  <BriefcaseAlt2 />
                </StyledIcon>
              </CircleIcon>
            </NavButton>
          </Link>
        </li>
        <li>
          <Link to='/blogs'>
            <NavButton>
              <CircleIcon iconActive={pathname === '/blogs'}>
                <StyledIcon>
                  <Article />
                </StyledIcon>
              </CircleIcon>
            </NavButton>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <NavButton>
              <CircleIcon iconActive={pathname === '/contact'}>
                <StyledIcon>
                  <MessageDetail />
                </StyledIcon>
              </CircleIcon>
            </NavButton>
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  position: fixed;
  right: 2.5rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  ul {
    list-style: none;
  }
  li {
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

const StyledIcon = styled.div`
  color: white;
  height: 2rem;
  width: 2rem;
  background: transparent;
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
`;

const NavButton = styled.div`
  h2 {
    display: none;
    opacity: 0;
    text-decoration: none !important;
    color: white;
  }
  :hover {
    transition: all 0.3s;
    border-radius: 30px;
    padding-left: 10rem;
    height: 3.5rem;
    background: #ffc107;
    h2 {
      //padding-right: 10rem;
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
