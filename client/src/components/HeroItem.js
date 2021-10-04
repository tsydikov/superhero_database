import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import { deleteSuperhero, getSuperheroes } from "../http";
import { API_URL } from "../http/api";
import { INFO_ROUTE } from "../utils/consts";

const HeroItem = observer(({ hero }) => {
  const history = useHistory();
  const { superhero } = useContext(Context);
  const click = () => {
    deleteSuperhero(hero._id).then(() =>
      getSuperheroes().then((data) => superhero.setSuperheroes(data))
    );
  };
  return (
    <Col md={3}>
      <Card className="mt-3">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => history.push(INFO_ROUTE + "/" + hero._id)}
        >
          <p>
            <Image thumbnail src={API_URL + hero.image} className="mb-1" />
          </p>
          <p class="text-center">
            <strong className="mx-auto">{hero.nickname}</strong>
          </p>
        </div>
        <Button className="mt-1" onClick={click}>
          Delete
        </Button>
      </Card>
    </Col>
  );
});

export default HeroItem;
