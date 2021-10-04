import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container } from "react-bootstrap";
import { CREATE_ROUTE, LIST_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  return (
    <Navbar bg="primary" variant="light">
      <Container>
        <Button onClick={() => history.push(LIST_ROUTE)}>
          Superheroes list
        </Button>
        <Button onClick={() => history.push(CREATE_ROUTE)}>Add new</Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
