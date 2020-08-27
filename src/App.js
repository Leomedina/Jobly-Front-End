import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navbar';
import './styles/App.css';
import Routes from './Routes';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [token])

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation token={token} />
        <Routes setToken={setToken} />
      </BrowserRouter>
    </div>
  );
}

export default App;
