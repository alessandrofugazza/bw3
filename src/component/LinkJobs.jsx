import { Col, Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const LinkJobs = () => {
  return (
    <Container className="mt-4">
      <Row className="">
        <Col className="bg-white rounded border py-2">
          <div className=" d-flex py-3 px-2">
            <i className="bi bi-bookmark-fill"></i>
            <h6 className="mt-0 px-1">Le mie offerte</h6>
          </div>
          <div className="d-flex py-3 px-2">
            <i className="bi bi-bell-fill"></i>
            <h6 className="px-1">Avvisi offerte di lavoro</h6>
          </div>
          <div className="d-flex py-3  px-2">
            <i className="bi bi-clipboard-check"></i>
            <h6 className="px-1">Valutazioni delle competenze</h6>
          </div>
          <div className="d-flex py-3  px-2">
            <i className="bi bi-youtube"></i>
            <h6 className="px-1">Indicazioni per chi cerca lavoro</h6>
          </div>
          <div className=" py-3 px-2 d-flex">
            <i className="bi bi-gear-fill"></i>
            <h6 className="mb-0 px-1">Impostazioni candidatura</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className=" d-flex justify-content-center mt-2 p-0">
          <button
            type="button"
            className="btn btn-link border rounded-pill border-primary text-decoration-none fw-bold"
            style={{ paddingInline: "3rem" }}
          >
            <i className="bi bi-pencil-square pe-2"></i>
            Pubblica offerta gratuita
          </button>
        </Col>
      </Row>
    </Container>
  );
};
export default LinkJobs;
