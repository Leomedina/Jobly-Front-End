import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {
  Container,
  ButtonGroup,
  Button,
  Row
} from 'react-bootstrap';

const Login = () => {
  const [currentForm, setCurrentForm] = useState("Login");

  return (
    <Container align="center">
      <Row ClassName="justify-content-md-center">
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
          {currentForm === "Login" ? <LoginForm /> : <SignupForm />}
        </Container>
      </Row>
    </Container >
  );
};

export default Login;