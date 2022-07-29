import React from "react";
import { Routes, Route } from 'react-router-dom';
import Provider from './components/contexts/provider';
import MainContent from "./components/MainContent";
// import Loading from "./components/messages/Loading";
// import NotFound from "./components/messages/NotFound";
function App() {
  return (
    <Provider>
      <Routes>
          <Route exact path="/" element={ <MainContent/> } />
      </Routes>
    </Provider>
  );
}

export default App
