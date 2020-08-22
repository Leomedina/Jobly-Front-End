import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
