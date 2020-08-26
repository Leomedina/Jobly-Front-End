import React from 'react';
import { Formik } from 'formik';
import {
  Form,
  Row,
  Col,
  Button,
  Container
} from 'react-bootstrap';

const LoginForm = ({ handleLogin }) => {
  return (
    <Container>
      <Row className="justify-content-md-center" align="left" >
        <Col sm>
          <Formik
            initialValues={{
              username: "",
              password: ""
            }}
            onSubmit={(values, { resetForm }) => {
              handleLogin(values.username, values.password);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
                <Form className="m-2" noValidate onSubmit={handleSubmit}>
                  <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="5" controlId="validationFormik01">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="5" controlId="validationFormik02">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="justify-content-md-center">
                    <Button type="submit" size="lg" >Submit</Button>
                  </Form.Row>
                </Form>
              )}
          </Formik>
        </Col>
      </Row>
    </Container >
  );
};

export default LoginForm;