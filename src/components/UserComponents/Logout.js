import React from 'react';
import { Redirect } from 'react-router-dom';


const Logout = ({ setToken }) => {
  localStorage.setItem("token", null);
  setToken(null);

  return (
    <Redirect to="/" />
  )
};

export default Logout; 