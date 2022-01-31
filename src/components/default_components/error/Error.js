import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  background: rgba(	139, 0, 0, 0.9);
  margin: 5px 0;
  padding: 10px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: white;
`;

const Error = (props) => {
  return <StyledError>{props.text}</StyledError>;
};

export default Error;
