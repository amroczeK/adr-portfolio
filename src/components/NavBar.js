import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '@styled-icons/fa-solid/Home';
import { Person } from '@styled-icons/fluentui-system-filled/Person';
import { BriefcaseAlt2 } from '@styled-icons/boxicons-solid/BriefcaseAlt2';
import { Article } from '@styled-icons/material/Article';
import { MessageDetail } from '@styled-icons/boxicons-solid/MessageDetail';
import NavButton from './NavButton';

const NavBar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to='/'>
            <NavButton path={'/'} icon={<Home />} title={'Home'} />
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <NavButton path={'/about'} icon={<Person />} title={'About'} />
          </Link>
        </li>
        <li>
          <Link to='/portfolio'>
            <NavButton path={'/portfolio'} icon={<BriefcaseAlt2 />} title={'Portfolio'} />
          </Link>
        </li>
        <li>
          <Link to='/blogs'>
            <NavButton path={'/blogs'} icon={<Article />} title={'Blogs'} />
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <NavButton path={'/contact'} icon={<MessageDetail />} title={'Contact'} />
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  //background: white;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 3.5rem;
  height: 100vh;
  margin-left: 1.25rem;
  ul {
    list-style: none;
  }
  li {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
