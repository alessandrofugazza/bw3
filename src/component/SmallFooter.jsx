import { Col, Container, Row, Image, NavDropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const SmallFooter = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-wrap m-4 ">
      <img
        className="rounded img-fluid "
        src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
        alt="adv"
      />
      <Row className="my-1">
        <Col>
          {" "}
          <p className="m-0 text-muted" style={{ fontSize: "13px" }}>
            Informazioni{" "}
          </p>
        </Col>
        <Col>
          {" "}
          <p className="m-0 text-muted" style={{ fontSize: "13px" }}>
            Accessibilità
          </p>
        </Col>
      </Row>
      <Row className="my-1 ">
        <Col>
          {" "}
          <p className="m-0 text-muted" style={{ fontSize: "13px" }}>
            Centro assistenza
          </p>
        </Col>
        <Col>
          <NavDropdown
            title="Privacy e condizioni"
            id="navbarScrollingDropdown"
            style={{ fontSize: "13px", paddingBlock: "0 px" }}
            className="text-muted"
          >
            <NavDropdown.Item href="#action3" className="fw-bold">
              Informativa sulla privacy
            </NavDropdown.Item>

            <NavDropdown.Item href="#action4" className="fw-bold">
              Contratto di licenza
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5" className="fw-bold">
              Termini e condizioni delle pagine
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5" className="fw-bold">
              Informativa sui cookie
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5" className="fw-bold">
              Informativa sul copyright
            </NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>
      <Row className="my-1">
        <Col>
          {" "}
          <p className="m-0 text-muted" style={{ fontSize: "13px" }}>
            Opzioni per gli annunci pubblicitari
          </p>
        </Col>
      </Row>
      <Row className="my-1">
        <Col>
          <p className="m-0 text-muted" style={{ fontSize: "13px" }}>
            Pubblicità
          </p>
        </Col>
        <Col>
          <NavDropdown
            title="Servizi alle aziende"
            id="navbarScrollingDropdown"
            className="text-muted"
            style={{ paddingBlock: "0 px", fontSize: "13px" }}
          >
            <NavDropdown.Item href="#action3" className="fw-bold">
              Impara con Linkedin
              <p className="fw-normal">Corsi per formare i tuoi dipendenti</p>
            </NavDropdown.Item>

            <NavDropdown.Item href="#action4" className="fw-bold">
              Centro Amministrazione
              <p className="fw-normal">Gestisci i dettagli di fatturazione e account</p>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5" className="fw-bold">
              Crea una pagina aziendale <i className="bi bi-plus-lg text-dark"></i>
            </NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>
      <Row className="my-1 align-items-center">
        <Col>
          {" "}
          <span className="m-0 text-muted" style={{ fontSize: "13px", whiteSpace: "nowrap" }}>
            Scarica l’app LinkedIn
          </span>
        </Col>
        <Col>
          {" "}
          <p className="m-0 text-muted" style={{ fontSize: "13px" }}>
            Altro
          </p>
        </Col>
      </Row>
      <div className="d-flex">
        <p className=" fw-bold text-primary">Linked</p>
        <Image
          src="https://www.effa.nl/wp-content/uploads/2018/01/linkedin-logo-1024x1024.png"
          style={{ width: "15px", height: "15px", marginTop: "4px", marginInline: "2px" }}
        />{" "}
        Corporation © 2023
      </div>
    </Container>
  );
};
export default SmallFooter;
