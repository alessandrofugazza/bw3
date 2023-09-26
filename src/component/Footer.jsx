import { Col, Container, ListGroup, NavDropdown, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="px-0 col-2">
          <ListGroup>
            <ListGroup.Item id="footerList">Informazioni</ListGroup.Item>
            <ListGroup.Item id="footerList">Linee Guide della community</ListGroup.Item>
            <ListGroup.Item id="footerList">Privacy e condizioni</ListGroup.Item>
            <ListGroup.Item id="footerList">Sales Solution</ListGroup.Item>
            <ListGroup.Item id="footerList">Centro sicurezza</ListGroup.Item>
            <ListGroup.Item id="footerList">LinkedIn Corporation &copy; 2023</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="px-0 col-2">
          <ListGroup>
            <ListGroup.Item id="footerList">Accessibilità</ListGroup.Item>
            <ListGroup.Item id="footerList">Carriera</ListGroup.Item>
            <ListGroup.Item id="footerList">Opzioni per gli annunci pubblicitari</ListGroup.Item>
            <ListGroup.Item id="footerList">Mobile</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="px-0 col-2">
          <ListGroup>
            <ListGroup.Item id="footerList">Talent Solutions</ListGroup.Item>
            <ListGroup.Item id="footerList">Soluzioni di marketing</ListGroup.Item>
            <ListGroup.Item id="footerList">Pubblicità</ListGroup.Item>
            <ListGroup.Item id="footerList">Piccole imprese</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="px-0 col-3">
          <ListGroup className="d-flex">
            <ListGroup.Item id="footerList" className="d-flex">
              <i className="bi bi-question-circle-fill fs-5 text-dark"></i>{" "}
              <div className="ms-2">
                <span>Domande?</span> <br />
                <span>Visita il nostro Centro assistenza.</span>
              </div>
            </ListGroup.Item>

            <ListGroup.Item id="footerList" className="d-flex">
              <i className="bi bi-gear-fill fs-5 text-dark"></i>{" "}
              <div className="ms-2">
                <span>Gestisci il tuo account e la tua privacy</span> <br />
                <span>Vai alle impostazioni </span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item id="footerList" className="d-flex">
              <i className="bi bi-shield-shaded fs-5 text-dark"></i>{" "}
              <div className="ms-2">
                {" "}
                <span>Trasparenza sui contenuti consigliati</span> <br />{" "}
                <span> Scopri di più sui contenuti consigliati.</span>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <p id="footerList" className="m-0">
            Seleziona lingua
          </p>
          <NavDropdown title="Italiano (Italiano)" id="dropLang">
            <NavDropdown.Item href="#action3">Inglese</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Giapponese</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Spagnolo</NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
