import React, { useState } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
  Container
} from 'react-bootstrap';

const Search = ({ handleSubmit }) => {
  const [inputData, setInputData] = useState({ search: '' });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputData(data => ({
      ...data,
      [name]: value
    }));
  }
  const formSubmit = () => {
    handleSubmit(inputData);
  }

  return (
    <Container className="justify-content-md-center">
      <InputGroup
        className="my-5"
        onChange={handleChange}
      >
        <FormControl
          name="search"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={inputData.value}
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={formSubmit}> Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default Search;