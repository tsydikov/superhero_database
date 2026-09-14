import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import HeroesList from "../components/HeroesList";
import Pages from "../components/Pages";
import { getSuperheroes } from "../http";

const List = observer(() => {
  const { superhero } = useContext(Context);

  useEffect(() => {
    getSuperheroes().then((data) => superhero.setSuperheroes(data));
  }, []);

  return (
    <Container>
      <HeroesList />
      <Pages />
    </Container>
  );
});

export default List;
