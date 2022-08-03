import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Provider from './contexts/provider';
import MainContent from './components/MainContent';
import Servants from './pages/Servants';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path='/' element={<MainContent />} />
        <Route exact path='/servants' element={<Servants />} />
      </Routes>
    </Provider>
  );
}

export default App;
