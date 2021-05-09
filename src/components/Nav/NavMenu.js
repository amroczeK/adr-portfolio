import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavMenu = ({ open, setOpen }) => {
  useEffect(() => {
    const media = window.matchMedia('(min-width: 576px)');
    const resize = (e) => {
      if (e.matches) {
        setOpen(false);
      }
    };
    media.addEventListener('change', resize);
    return () => {
      media.removeEventListener('change', resize);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container open={open}>
      <ul>
        <li>
          <Link to='/'>
            <LinkContainer onClick={() => setOpen(!open)}>
              <h1>HOME</h1>
            </LinkContainer>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <LinkContainer onClick={() => setOpen(!open)}>
              <h1>ABOUT</h1>
            </LinkContainer>
          </Link>
        </li>
        <li>
          <Link to='/portfolio'>
            <LinkContainer onClick={() => setOpen(!open)}>
              <h1>PORTFOLIO</h1>
            </LinkContainer>
          </Link>
        </li>
        <li>
          <Link to='/blogs'>
            <LinkContainer onClick={() => setOpen(!open)}>
              <h1>BLOGS</h1>
            </LinkContainer>
          </Link>
        </li>
        <li>
          <Link to='/admin'>
            <LinkContainer onClick={() => setOpen(!open)}>
              <h1>ADMIN PANEL</h1>
            </LinkContainer>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.primaryBackground};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  @media (min-width: 602px) {
    display: none;
  }
  ul {
    list-style: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 6rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  h1 {
    font-size: 2rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primaryLight};
  }
  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${({ theme }) => theme.primaryDark};
  }
`;
