import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Container, Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { EDIT_ROUTE } from "../utils/consts";
import { getOneSuperhero } from "../http";
import { API_URL } from "../http/api";

const Info = () => {
  const history = useHistory();
  const [heroInfo, setHeroInfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getOneSuperhero(id).then((data) => setHeroInfo(data));
    // eslint-disable-next-line
  }, []);
  return (
    // heroInfo.image &&
    <Container className="mt-3">
      {heroInfo.image && (
        <Row>
          <Col sm={4}>
            <Image thumbnail src={API_URL + heroInfo.image} />
          </Col>
          <Col sm={8}>
            <Row className="mb-1">
              <Col>
                <strong>nickname​: </strong>
                {heroInfo.nickname}
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <strong>real_name: </strong>
                {heroInfo.real_name}
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <strong>origin_description: </strong>
                {heroInfo.origin_description}
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <strong>superpowers: </strong>
                {heroInfo.superpowers}
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <strong>catch_phrase: </strong>
                {heroInfo.catch_phrase}
              </Col>
            </Row>
            <Button
              className="mt-3"
              onClick={() => history.push(EDIT_ROUTE + "/" + id)}
            >
              EDIT
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Info;
