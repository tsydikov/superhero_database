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
    superhero.setHeroes(
      superhero.superheroes.slice(
        (superhero.page - 1) * superhero.limit,
        superhero.limit + (superhero.page - 1) * superhero.limit
      )
    );
    // eslint-disable-next-line
  }, [superhero.page, superhero.superheroes]);

  useEffect(() => {
    getSuperheroes().then((data) => superhero.setSuperheroes(data));
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <HeroesList />
      <Pages />
    </Container>
  );
});

export default List;
