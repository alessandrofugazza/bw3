import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const ModalPost = (props) => {
  const [comment, setComment] = useState("");
  const [createPostResp, setCreatePostResp] = useState(null);

  const handleClose = () => props.setShow(false);

  const createPost = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        body: { text: comment },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setCreatePostResp(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post", e.target[1].files[0]);
    if (createPostResp) {
      try {
        const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/:" + createPostResp._id, {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
          },
        });
        if (resp.ok) {
          const data = await resp.json();
          console.log(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Di cosa vorresti parlare?">
            <Form.Control
              as="textarea"
              placeholder="Di cosa vorresti parlare?"
              style={{ height: "100px" }}
              onChange={(e) => setComment(e.target.value)}
            />
          </FloatingLabel>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Inserisci un'immagine per il post</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
      </Form>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          onClick={() => {
            handleClose();
            createPost();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPost;
