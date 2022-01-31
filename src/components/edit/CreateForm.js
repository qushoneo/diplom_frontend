import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../default_components/input/Input';
import Button from '../default_components/button/Button';
import Api from '../../Api';
import Error from '../default_components/error/Error';

const StyledInfo = styled.div`
  width: 70%;
`;

const StyledInfoForm = styled.div`
  width: 30%;
`;

const CreateForm = (props) => {
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorField, setErrorField] = useState(null);

  const CreateUser = () => {
    Api.Employees.addNewEmployee({
      name: name,
      lastname: lastname,
    })
      .then((newData) => {
        props.createWindow(false);
        props.setData(newData.data)
      })
      .catch((error) => {
        console.log(error.response.data)
        //setErrorMessage(error.response.data.message);
        //setErrorField(error.response.data.field);
      });
    
  };

  return (
    <StyledInfo>
      <StyledInfoForm>
        <Input
          caption={'Name'}
          onChange={setName}
          value={name}
        />
        {errorMessage && errorField === 'name' && <Error text={errorMessage} />}
      </StyledInfoForm>
      <StyledInfoForm>
        <Input
          caption={'Lastname'}
          onChange={setLastname}
          value={lastname}
        />
        {errorMessage && errorField === 'lastname' && <Error text={errorMessage} />}
      </StyledInfoForm>

      <Button text={'Create'} onClick={CreateUser} />
    </StyledInfo>
  );
};

export default CreateForm;
