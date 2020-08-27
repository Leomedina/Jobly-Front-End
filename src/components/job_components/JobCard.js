import React from 'react';
import { useHistory } from 'react-router-dom';
import JoblyApi from '../../util/JoblyApi';
import {
  Card,
  Button
} from 'react-bootstrap';

const JobCard = ({ id, title, salary, equity, state }) => {
  const history = useHistory();

  const handleRequest = () => {
    const res = JoblyApi.apply(id);
    history.push('/companies');
  };

  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Text>
          Salary: {salary}
          <br />
          Equity: {equity}
        </Card.Text>
        {state === "applied" ?
          <button variant="primary" disabled>Thanks for Applying</button> :
          <Button
            onClick={handleRequest}
            variant="primary">
            Apply
          </Button>
        }
      </Card.Body >
    </Card >
  );
};

export default JobCard;