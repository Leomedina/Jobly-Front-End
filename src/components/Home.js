import React from 'react';
import {
  Container,
  Row
} from 'react-bootstrap';

const Home = () => (
  <Container>
    <Row className="justify-content-md-center">
      <h1><strong>Jobly</strong></h1>
    </Row>
    <Row className="justify-content-md-center">
      <p>Jobs in one easy location</p>
    </Row>
    <Row className="justify-content-md-center" m={4}>
      <img src="https://i.imgur.com/3uSmf7z.png" alt="homepage"/>
    </Row>
  </Container>
);

export default Home;