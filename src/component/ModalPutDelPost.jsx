import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "../redux/action";

const ModalPutDelPost = ({ show, setShow, post }) => {
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const [textPost, setTextPost] = useState(post.text);

  const changePost = (valore) => {
    setTextPost(valore);
  };

  const fetchPutArticle = async () => {
    handleClose();
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + post._id, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
          "Content-type": "application/json",
        },
        body: JSON.stringify({ text: textPost }),
      });
      if (resp.ok) {
        dispatch(fetchAllPost());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDelArticle = async () => {
    handleClose();
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + post._id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
          "Content-type": "application/json",
        },
      });
      if (resp.ok) {
        dispatch(fetchAllPost());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel controlId="floatingTextarea2" label="Di cosa vorresti parlare?">
          <Form.Control
            value={textPost}
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
        <Button variant="outline-primary" onClick={() => fetchPutArticle()}>
          Save Changes
        </Button>
        <Button variant="danger" onClick={() => fetchDelArticle()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPutDelPost;
