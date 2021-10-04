import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import HeroItem from "./HeroItem";

const HeroesList = observer(() => {
  const { superhero } = useContext(Context);
  return (
    <Row>
      {superhero.heroes.map((hero) => (
        <HeroItem key={hero._id} hero={hero} />
      ))}
    </Row>
  );
});

export default HeroesList;
