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

const SignupForm = () => {
  return (
    <Container>
      <Row className="justify-content-md-center" >
        <Col sm>
          <Formik
            onSubmit={console.log}
            initialValues={{
              firstName: '',
              lastName: '',
              username: '',
              email: ''
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
                <Form className="m-2" sm noValidate onSubmit={handleSubmit}  >
                  <Form.Row className="justify-content-md-center" >
                    <Form.Group as={Col} md="5" controlId="validationFormikUsername">
                      <Form.Label>Username</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.username}
                        </Form.Control.Feedback>
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
                        isValid={touched.firstName && !errors.firstName}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        isValid={touched.lastName && !errors.lastName}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        isValid={touched.lastName && !errors.lastName}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="5" controlId="validationFormik02">
                      <Form.Label>Photo URL</Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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