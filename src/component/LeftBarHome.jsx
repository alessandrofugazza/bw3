import { Col, Container, Row, Image } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LeftBarHome = () => {
  const myProfile = useSelector((state) => state.profile.content);

  return (
    <Container className="mt-4">
      <Row className="">
        <Col className="px-0 bg-white rounded border">
          <div className="position-relative ">
            <div className="rounded-top" id="contCoverLeft">
              <Image
                className=""
                id="imgCoverLeft"
                src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="CoverProfile"
              />
            </div>

            <div id="imgProfCoverLef">
              <Image id="imgProfileLeft" src={myProfile.image} alt="ImgProfile" />
            </div>
            <div className="mt-5 px-3 text-center border-bottom ">
              <Link to="/" className="nav-link">
                <h4>
                  {myProfile.name} {myProfile.surname}
                </h4>
              </Link>
              <p className="text-secondary">{myProfile.title}</p>
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
            <i className="bi bi-bookmark-fill text-secondary"></i>
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
