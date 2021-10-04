import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useHistory, useParams } from "react-router-dom";
import { getOneSuperhero, updateSuperhero } from "../http";
import { LIST_ROUTE } from "../utils/consts";

const Edit = observer(() => {
  const history = useHistory();
  const { id } = useParams();
  const [nickname, setNickName] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [file, setFile] = useState("");
  useEffect(() => {
    getOneSuperhero(id).then((data) => {
      setNickName(data.nickname);
      setRealName(data.real_name);
      setOriginDescription(data.origin_description);
      setSuperpowers(data.superpowers);
      setCatchPhrase(data.catch_phrase);
      setFile(data.image);
    });
    // eslint-disable-next-line
  }, []);

  const editSuperhero = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_id", id);
    formData.append("nickname", nickname);
    formData.append("real_name", realName);
    formData.append("origin_description", originDescription);
    formData.append("superpowers", superpowers);
    formData.append("catch_phrase", catchPhrase);
    formData.append("image", file);
    updateSuperhero(formData).then((data) => history.push(LIST_ROUTE));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          value={nickname}
          onChange={(e) => setNickName(e.target.value)}
          type="text"
          placeholder="nickname​"
          className="mb-3 mt-3"
        />
        <Form.Control
          value={realName}
          onChange={(e) => setRealName(e.target.value)}
          type="text"
          placeholder="real_name"
          className="mb-3"
        />
        <Form.Control
          value={originDescription}
          onChange={(e) => setOriginDescription(e.target.value)}
          type="text"
          placeholder="origin_description"
          className="mb-3"
        />
        <Form.Control
          value={superpowers}
          onChange={(e) => setSuperpowers(e.target.value)}
          type="text"
          placeholder="superpowers"
          className="mb-3"
        />
        <Form.Control
          value={catchPhrase}
          onChange={(e) => setCatchPhrase(e.target.value)}
          type="text"
          placeholder="catch_phrase"
          className="mb-3"
        />
        <Form.Control
          value={file}
          type="text"
          placeholder="image url"
          onChange={(e) => setFile(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" onClick={editSuperhero}>
        Submit
      </Button>
    </Form>
  );
});

export default Edit;
