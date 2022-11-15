import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Provider from './contexts/provider';
import MainContent from './pages/MainContent';
import Servants from './pages/Servants';
import ServantId from './pages/ServantId';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path='/' element={<MainContent />} />
        <Route exact path='/servants' element={<Servants />} />
        <Route exact path='/servants/:id' element={<ServantId />} />
      </Routes>
    </Provider>
  );
}

export default App;
