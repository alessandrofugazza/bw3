import { Col, Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import { BsCardImage } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
const PostHome = () => {
  return (
    <Container>
      <Row className="bg-white">
        <Col xs={1}>
          <img
            src="https://images.unsplash.com/photo-1695642579133-d41f36bcca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="img-profile"
            className="rounded-circle"
          />
        </Col>
        <Col xs={11}>
          <InputGroup size="lg" className="rounded-pill">
            <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        </Col>
        <Col xs={6}>
          <Button className="text-secondary bg-white border border-0">
            <BsCardImage />
            Contenuti multimediali
          </Button>
        </Col>
        <Col xs={3}>
          <Button className="text-secondary bg-white border border-0">
            <FaCalendarAlt />
            Evento
          </Button>
        </Col>
        <Col xs={3}>
          <Button className="text-secondary bg-white border border-0">
            <RiArticleLine />
            Scrivi un articolo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default PostHome;
