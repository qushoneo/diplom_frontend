import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  padding: 10px;
  margin: 10px 0;
  background: rgba(138, 198, 209, 1);
  border-radius: 10px;
  color: white;
  font-weight: 500;
  border: 1px solid rgba(138,198,209,1);
  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 255, 0.3);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 255, 0.3);
  }
`;

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;
