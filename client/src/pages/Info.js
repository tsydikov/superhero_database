import React, { useEffect, useState } from "react";
import { Button, Col, Row, Container, Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { EDIT_ROUTE } from "../utils/consts";
import { getOneSuperhero } from "../http";
import { API_URL } from "../http/api";

const Info = () => {
  const history = useHistory();
  const [heroInfo, setHeroInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOneSuperhero(id).then((data) => setHeroInfo(data));
  }, [id]);

  if (!heroInfo) {
    return null;
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col sm={4}>
          <Image thumbnail src={API_URL + heroInfo.image} />
        </Col>
        <Col sm={8}>
          <Row className="mb-1">
            <Col>
              <strong>Nickname: </strong>
              {heroInfo.nickname}
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <strong>Real name: </strong>
              {heroInfo.real_name}
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <strong>Origin: </strong>
              {heroInfo.origin_description}
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <strong>Superpowers: </strong>
              {heroInfo.superpowers}
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <strong>Catch phrase: </strong>
              {heroInfo.catch_phrase}
            </Col>
          </Row>
          <Button
            className="mt-3"
            onClick={() => history.push(EDIT_ROUTE + "/" + id)}
          >
            Edit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
