import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const ModalPost = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel controlId="floatingTextarea2" label="Di cosa vorresti parlare?">
          <Form.Control as="textarea" placeholder="Di cosa vorresti parlare?" style={{ height: "100px" }} />
        </FloatingLabel>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Inserisci un'immagine per il post</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPost;
