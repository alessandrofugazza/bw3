import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "../redux/action";

const ModalPost = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [textPost, setTextPost] = useState("");
  const dispatch = useDispatch();

  const changePost = (valore) => {
    setTextPost(valore);
  };

  const fetchPostArticle = async () => {
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: textPost }),
    });
    handleClose();
    dispatch(fetchAllPost());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel controlId="floatingTextarea2" label="Di cosa vorresti parlare?">
          <Form.Control
            onChange={(e) => {
              changePost(e.target.value);
            }}
            as="textarea"
            placeholder="Di cosa vorresti parlare?"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Inserisci un'immagine per il post</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={() => fetchPostArticle()}>
          Posta Attività
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPost;
