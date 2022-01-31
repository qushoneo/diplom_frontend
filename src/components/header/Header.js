import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: 0 auto;
  background: rgba(138,198,209,0.2);
  height: 3rem;
  display: flex;
  justify-content: space-around;
  margin-bottom:20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4c549f;
  width: 50%;
  font-size: 1.5rem;
  &:hover {
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 255, 0.2);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink href={'/list'}>LIST</StyledLink>
      <StyledLink href={'/edit'}>EDIT</StyledLink>
      <StyledLink href={'/settings'}>SETTINGS</StyledLink>
    </StyledHeader>
  );
};

export default Header;
