import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button
} from 'react-bootstrap';

const CompanyCard = ({ handle, name, description }) => {

  return (
    <Card>
      <Card.Header as="h5">{name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {handle}: {description}
        </Card.Text>
        <Link to={`/companies/${handle}`}>
          < Button variant="primary">See Jobs</Button>
        </Link>
      </Card.Body >
    </Card >
  );
};

export default CompanyCard;