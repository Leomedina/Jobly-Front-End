import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navbar';
import './styles/App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
