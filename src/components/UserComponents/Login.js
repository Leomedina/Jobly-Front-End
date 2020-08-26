import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import JoblyApi from '../../util/JoblyApi';
import SignupForm from './SignupForm';
import {
  Container,
  ButtonGroup,
  Button,
  Row
} from 'react-bootstrap';

const Login = ({ setToken, setUser }) => {
  const [currentForm, setCurrentForm] = useState("Login");
  const history = useHistory();

  const handleLogin = async (username, password) => {
    const token = await JoblyApi.login(username, password);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    history.push('/companies');
  };

  const handleRegister = async (username, password, first_name, last_name, email) => {
    const token = await JoblyApi.register(username, password, first_name, last_name, email);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    history.push('/companies');
  };

  return (
    <Container align="center">
      <Row className="justify-content-md-center">
        <Container >
          <ButtonGroup>
            <Button
              variant="primary"
              onClick={() => setCurrentForm('Login')}
              active={currentForm === "Login" ? true : false}>Login</Button>
            <Button
              variant="primary"
              onClick={() => setCurrentForm('Signup')}
              active={currentForm === "Signup" ? true : false}>Signup</Button>
          </ButtonGroup>
          {currentForm === "Login" ?
            <LoginForm handleLogin={handleLogin} />
            : <SignupForm handleRegister={handleRegister} />}
        </Container>
      </Row>
    </Container >
  );
};

export default Login;