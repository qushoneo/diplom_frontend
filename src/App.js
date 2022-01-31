import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styled from 'styled-components';
import List from './components/main/List.js';
import Header from './components/header/Header';
import Edit from './components/edit/Edit'

const App = () => {

  const StyledPage = styled.div`
    margin: 0 auto;
    width: 70%;
  `;

  return (
    <div className='App'>
      <StyledPage>
        <Header />
        <Routes>
          <Route element={<List />} path='/List' />
          <Route element={<Edit />} path='/edit' />
        </Routes>
      </StyledPage>
    </div>
  );
};

export default App;
