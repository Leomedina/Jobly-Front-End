import React from 'react';
import {
  Button,
  InputGroup,
  FormControl,
  Container
} from 'react-bootstrap';

const Search = () => {

  return (
    <Container className="justify-content-md-center">
      <InputGroup className="my-5">
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="primary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default Search;