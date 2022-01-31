import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../default_components/input/Input';

const StyledInfo = styled.div`
  width: 70%;
`;

const InfoWindow = (props) => {
  const [name, setName] = useState();

  useEffect(() => {
    setName(props.selectedEmployee ? props.selectedEmployee.name : null)
  }, [props.selectedEmployee])

  return (
    <StyledInfo>
     {name}
    </StyledInfo>
  );
};

export default InfoWindow;
