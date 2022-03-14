import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, getProfile } from '../account/authSlice.js';

const StyledHeader = styled.div`
  margin: 0 auto;
  background: rgba(138, 198, 209, 0.2);
  height: 3rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
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
  const dispatch = useDispatch();
  let isAuth = useSelector((state) => state.auth.isAuth);
  let user = useSelector((state) => state.auth.user);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (isAuth) {
      dispatch(getProfile());
    }
  }, []);

  return (
    <StyledHeader>
      {isAuth ? (
        <>
          <StyledLink to={'/list'}>LIST</StyledLink>
          <StyledLink to={'/edit'}>EDIT</StyledLink>
          <StyledLink
            to={'./account'}
          >{`Hi, ${user.username?.toUpperCase()}`}</StyledLink>
          <StyledLink onClick={() => dispatch(logout())} to={'/login'}>
            LOGOUT
          </StyledLink>
        </>
      ) : (
        <StyledLink to={'/login'}>LOGIN</StyledLink>
      )}
    </StyledHeader>
  );
};

export default Header;
