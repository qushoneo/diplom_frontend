import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from '../../Api.js';

const ListBody = styled.div``;

const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.Employees.getAllEmployees().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <ListBody>
      <table>
        {data.map((element) => (
          <tr>{element.name}</tr>
        ))}
      </table>
    </ListBody>
  );
};

export default List;
