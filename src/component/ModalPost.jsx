import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "../redux/action";

const ModalPost = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [textPost, setTextPost] = useState("");
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState("");

  const changePost = (valore) => {
    setTextPost(valore);
  };
  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("post", e.target[1].files[0]);
    const resp1 = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: textPost }),
    });
    if (resp1.ok) {
      const data = await resp1.json();

      const resp2 = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + data._id, {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        },
      });
    }
    dispatch(fetchAllPost());
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(e);
        }}
      >
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
          <Button type="submit" variant="outline-primary">
            Posta Attività
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default ModalPost;
