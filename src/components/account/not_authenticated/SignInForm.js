import { useState, useEffect } from 'react';
import Input from '../../default_components/input/Input';
import styled from 'styled-components';
import Button from '../../default_components/button/Button';
import { Navigate } from 'react-router-dom';
import { SignIn } from '../authSlice';
import { useDispatch, useSelector } from 'react-redux';

const StyledSignIn = styled.div`
  margin: 0 auto;
  width: 400px;
  padding: 20px;
  border: 1px solid black;
  .form {
    margin: 0 auto;
    width: 200px;
  }
  .submit_login {
    margin-right: auto 0;
  }
`;

const SignInForm = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  let isAuth = useSelector(state => state.auth.isAuth);

  if (isAuth) {
    <Navigate to="list" />
  }

  

  return (
    <StyledSignIn>
      <Input
        formClassName={'form'}
        caption={'Login'}
        value={username}
        onChange={setUsername}
      />
      <Input
        formClassName={'form'}
        caption={'Password'}
        value={password}
        onChange={setPassword}
        type={'password'}
      />
      <Button
        className={'submit_login'}
        text={'Login'}
        onClick={() => dispatch(SignIn({ username, password }))}
      />
    </StyledSignIn>
  );
};

export default SignInForm;
