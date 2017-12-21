import React from 'react';
import { Button, Form, FormGroup, FormControl, Row } from 'react-bootstrap';

const Search = (props) => {
  return (
    <Row>
      <Form inline onSubmit={props.search}>
        <FormGroup
          controlId="formBasicText"
          validationState={props.validationState}
        >
          <FormControl
            type="text"
            name="input"
            placeholder="search or browse users"
          />
          <FormControl.Feedback />
          <Button type="submit">Search</Button>
        </FormGroup>
      </Form>
    </Row>
  )
}

export default Search

