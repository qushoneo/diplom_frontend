import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 6px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  span {
    padding: 5px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 800;
    font-size: 1.2rem;
    color: #4c549f;
  }
`;

const Input = (props) => {
  return (
    <StyledForm>
      {props.caption && <span>{props.caption}</span>}
      <StyledInput
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value ? props.value : ''}
      ></StyledInput>
    </StyledForm>
  );
};

export default Input;
