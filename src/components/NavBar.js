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
            <NavButton path={'/about'} icon={<Person />} title={'Person'} />
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
  position: fixed;
  bottom: 2.5rem;
  right: 1.5rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  ul {
    list-style: none;
  }
  li {
    margin-top: 4rem;
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
