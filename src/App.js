import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Api from './Api';
import Header from './components/header/Header';
import UserRoutes from './UserRoutes';

const StyledPage = styled.div`
  margin: 0 auto;
  width: 70%;
`;

const App = () => {
  
  return (
    <div className='App'>
      <StyledPage>
        <Header/>
        <UserRoutes />
      </StyledPage>
    </div>
  );
};

export default App;
