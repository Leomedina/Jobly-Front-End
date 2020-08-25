import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button
} from 'react-bootstrap';

const JobCard = ({ id, title, salary, equity, state }) => {

  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Text>
          Salary: {salary}
          <br />
          Equity: {equity}
        </Card.Text>
        <Link to={'/'}>
          < Button variant="primary" disabled={state ? true : false}>Apply</Button>
        </Link>
      </Card.Body >
    </Card >
  );
};

export default JobCard;