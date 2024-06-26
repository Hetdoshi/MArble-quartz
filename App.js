// src/App.js
import React from 'react';
import Header from './components/Header';
import MarblePage from './components/MarblePage';
import QuartzPage from './components/QuartzPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MarblePage />
      <QuartzPage/>
    </div>
  );
};

export default App;
