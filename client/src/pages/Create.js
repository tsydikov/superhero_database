import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import { createdSuperhero } from "../http";
import { LIST_ROUTE } from "../utils/consts";

const Create = observer(() => {
  const history = useHistory();
  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [file, setFile] = useState(null);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addNewSuperhero = (e) => {
    e.preventDefault();
    if (!file) {
      return alert("You have to add a picture");
    }
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("real_name", realName);
    formData.append("origin_description", originDescription);
    formData.append("superpowers", superpowers);
    formData.append("catch_phrase", catchPhrase);
    formData.append("image", file);
    console.log(formData);
    createdSuperhero(formData).then((data) => history.push(LIST_ROUTE));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
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
        <Form.Control type="file" onChange={selectFile} />
      </Form.Group>
      <Button type="submit" onClick={addNewSuperhero}>
        Submit
      </Button>
    </Form>
  );
});

export default Create;
