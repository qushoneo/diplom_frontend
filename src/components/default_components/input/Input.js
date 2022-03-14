import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`

  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  padding:6px;
`;

const StyledForm = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  position:relative;
  span {
    background:white ;
    position:absolute;
    left:15px;
    top:-3px;
    padding:0px 2px 0px 2px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    color: #4c549f;
    user-select:none;
    border:1px solid rgba(0,0,0,0.2);
  }
`;

const Input = ({type, caption, onChange, value, formClassName, inputClassName }) => {
  return (
    <StyledForm className={formClassName}>
      {caption && <span>{caption}</span>}
      <StyledInput
        type={type}
        className={inputClassName}
        onChange={(e) => onChange(e.target.value)}
        value={value ? value : ''}
      ></StyledInput>
    </StyledForm>
  );
};

export default Input;
