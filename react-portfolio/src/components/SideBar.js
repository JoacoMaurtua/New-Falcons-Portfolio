import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const SideBarStyled = styled.div`
  width: 16rem;
  height: 100vh;
  position: fixed;
  background-color: var(--navigation);
  font-size: 1.3rem !important;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export default function SideBar({ navToggle }) {
  return (
    <SideBarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
      <Navigation />
    </SideBarStyled>
  );
}

//00083129000
