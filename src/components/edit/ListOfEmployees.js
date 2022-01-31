import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListComponent = styled.div`
  border-left: 3px solid rgba(138, 198, 209, 1);
  width: 30%;
`;

const StyledList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledElementOfList = styled.div`
  border: 1px solid transparent;
  padding: 10px 5px;
  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 255, 0.3);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 255, 0.3);
  }
`;

const CreateButton = styled.div`
  padding: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  color: #4c549f;
  border-top: 3px solid rgba(138, 198, 209, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 255, 0.3);
  }
`;

const ListOfEmployees = (props) => {
  return (
    <ListComponent style={{ display: 'flex', flexDirection: 'column' }}>
      <StyledList>
        {props.employees.map((el) => (
          <StyledElementOfList
            key={el.name + el._id}
            onClick={() => {
              props.select(el);
              props.createWindow(false);
            }}
          >{`${el.name} ${el.lastname}`}</StyledElementOfList>
        ))}
      </StyledList>
      <CreateButton onClick={() => props.createWindow(true)}>
        CREATE
      </CreateButton>
    </ListComponent>
  );
};

export default ListOfEmployees;
