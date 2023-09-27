import { Col, Container, Row, Image } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const LeftBarHome = () => {
  return (
    <Container className="mt-4">
      <Row className="">
        <Col className="px-0 bg-white rounded border">
          <div className="position-relative ">
            <div className="rounded-top" id="contCoverLeft">
              <Image
                className=""
                id="imgCoverLeft"
                src="https://thumbs.dreamstime.com/b/sunglasses-against-backdrop-sun-solar-eclipse-sunglasses-against-backdrop-sun-solar-eclipse-generative-ai-272337864.jpg"
                alt="CoverProfile"
              />
            </div>

            <div id="imgProfCoverLef">
              <Image id="imgProfileLeft" src="https://www.w3schools.com/howto/img_avatar2.png" alt="ImgProfile" />
            </div>
            <div className="mt-5 px-3 text-center border-bottom ">
              <h4>Pino La Lavatrice</h4>
              <p className="text-secondary">Riparatore di lavatrici professionale</p>
            </div>
          </div>
          <div className="border-bottom px-3 pb-2">
            <div className="d-flex justify-content-between mt-2 pt-2" style={{ height: "28px" }}>
              <p className=" text-secondary m-0 ">Collegamenti</p>
              <p className="text-primary">3</p>
            </div>
            <h6 className="mt-0">Espandi la tua Rete</h6>
          </div>
          <div className="border-bottom px-3">
            <p className="mb-0 mt-2 text-secondary">Accedi a strumenti e informazioni in esclusiva</p>
            <h6 className="">Prova Premium gratis</h6>
          </div>
          <div className="px-3 my-3 d-flex">
            <i class="bi bi-bookmark-fill text-secondary"></i>
            <p className="mb-0 ps-2 fw-bold text-secondary">I miei elementi</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-2">
          <Container className="bg-white rounded border px-0">
            <div className=" p-3 text-primary">
              <p>Gruppi</p>
              <div className="d-flex justify-content-between">
                <p>Eventi</p>
                <i className="bi bi-plus-lg text-dark"></i>
              </div>
              <p className="mb-0">Hashtag seguiti</p>
            </div>
            <div className="border-top py-3 text-center text-secondary">
              <h6>Scopri di più</h6>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default LeftBarHome;
