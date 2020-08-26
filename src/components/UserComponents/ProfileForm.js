import React from 'react';
import JoblyApi from '../../util/JoblyApi';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  Container
} from 'react-bootstrap';

const ProfileForm = () => {
  const history = useHistory();
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>Profile</h1>
      </Row>
      <Row className="justify-content-md-center" >
        <Col sm>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              username: `${localStorage.getItem('username')}`,
              email: '',
              password: ''

            }}
            onSubmit={(values, { resetForm }) => {
              const res = JoblyApi.update(values.username, values.first_name, values.last_name, values.email, values.password);
              console.log(res);
              history.push('/companies');
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
                    <Form.Group as={Col} md="5" controlId="validationFormikUsername">
                      <fieldset disabled>
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
                          />
                        </InputGroup>
                      </fieldset>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="5" controlId="validationFormik01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
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
                        name="last_name"
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
                      <Form.Label>Re-Type Password</Form.Label>
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

export default ProfileForm;