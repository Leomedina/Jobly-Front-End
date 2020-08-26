import React from 'react';
import { Formik } from 'formik';
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  Container
} from 'react-bootstrap';

const SignupForm = ({ handleRegister }) => {
  return (
    <Container>
      <Row className="justify-content-md-center" >
        <Col sm>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              username: '',
              email: ''
            }}
            onSubmit={(values, { resetForm }) => {
              handleRegister(values.username, values.password, values.first_name, values.last_name, values.email);
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
                <Form className="m-2" noValidate onSubmit={handleSubmit}  >
                  <Form.Row className="justify-content-md-center" >
                    <Form.Group as={Col} md="5" controlId="validationFormikUsername">
                      <Form.Label>Username</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          aria-describedby="inputGroupPrepend"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="5" controlId="validationFormik01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="5" controlId="validationFormik02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="5" controlId="validationFormik02">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
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

export default SignupForm;