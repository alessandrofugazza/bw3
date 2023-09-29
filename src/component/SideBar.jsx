import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Pencil, PersonFillAdd } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUsers } from "../redux/action";

const SideBar = () => {
  const sidebarFetchStudent = useSelector((state) => state.users.content);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch(setUsers(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="p-4">
      <Row>
        <Col xs={12} className="mb-2 rounded border bg-light ">
          <Row className="align-items-start border-bottom  py-2">
            <Col xs={9} className="d-flex flex-column text-start">
              <h5>Lingua del profilo</h5>
              <p className="text-muted">italiano</p>
            </Col>
            <Col xs={3} className="d-flex justify-content-end">
              <Pencil />
            </Col>
          </Row>
          <Row className="py-2">
            <Col xs={9} className="d-flex flex-column text-start">
              <h5>Public profile & URL</h5>
              <p className="text-muted text-start">www.linkedin.com/in/my-profile-name-id</p>
            </Col>
            <Col xs={3} className="d-flex justify-content-end">
              <Pencil />
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="mb-2 border rounded p-0 bg-light text-center">
          <img
            className="rounded img-fluid "
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="adv"
          />
        </Col>
        <Col xs={12} className="py-2 mb-2 d-flex flex-column align-items-start rounded border bg-light">
          <div className="border-bottom text-start">
            <h5>Persone che potresti conoscere</h5>
            <p className="text-muted">Dalla tua scuola/lavoro</p>
          </div>

          {sidebarFetchStudent &&
            // eslint-disable-next-line array-callback-return
            sidebarFetchStudent.map((el, i) => {
              if (i < 10) {
                return (
                  <Row className="border-bottom bg-light p-2 m-2" key={el._id}>
                    <Col xs={3} className="p-1">
                      <Link to={"/" + el._id}>
                        <img width={"80px"} className="rounded-circle img-fluid" src={el.image} alt="profile-foto" />
                      </Link>
                    </Col>

                    <Col xs={9} className="p-0 d-flex flex-column align-items-start text-start">
                      <h5>
                        {el.name} {el.surname}
                      </h5>
                      <p className="text-truncate text-wrap">{el.title}</p>
                      <Button className=" rounded-pill" variant="outline-secondary">
                        <PersonFillAdd /> Collegati
                      </Button>
                    </Col>
                  </Row>
                );
              }
            })}
        </Col>
        <Col xs={12} className="mb-2 rounded border bg-light">
          <div className="d-flex justify-content-start align-items-center ">
            <img
              width={"25rem"}
              className="pe-2"
              src="data:image/png;base64,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"
              alt="logo linkedin"
            />
            <h6 className="m-0">LEARNING</h6>
          </div>
          <div className="text-start border-bottom">
            <p>Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</p>
          </div>
          <Row className="mb-2 border-bottom">
            <Col xs={4} className="p-0 d-flex flex-column justify-content-center">
              <img
                className="img-fluid"
                src="https://media.licdn.com/dms/image/C4E0DAQF9Ffx0ZFkVew/learning-public-crop_60_100/0/1584382504447?e=1696240800&v=beta&t=TQh1GvobwvOoEVNo9whTnYz2vmWkWvxZwrfEROyCQhc"
                alt="video"
              />
            </Col>
            <Col xs={8} className="d-flex justify-content-start ">
              <p className="fw-bold text-truncate">Gestione dei progetti semplificata</p>
            </Col>
          </Row>
          <Row className="mb-2 border-bottom">
            <Col xs={4} className="p-0 d-flex flex-column justify-content-center">
              <img
                className="img-fluid"
                src="https://media.licdn.com/dms/image/C4E0DAQF9Ffx0ZFkVew/learning-public-crop_60_100/0/1584382504447?e=1696240800&v=beta&t=TQh1GvobwvOoEVNo9whTnYz2vmWkWvxZwrfEROyCQhc"
                alt="video"
              />
            </Col>
            <Col xs={8} className="d-flex justify-content-start ">
              <p className="fw-bold text-truncate">Gestione dei progetti semplificata</p>
            </Col>
          </Row>
          <Row className="mb-2 border-bottom">
            <Col xs={4} className="p-0 d-flex flex-column justify-content-center">
              <img
                className="img-fluid"
                src="https://media.licdn.com/dms/image/C4E0DAQF9Ffx0ZFkVew/learning-public-crop_60_100/0/1584382504447?e=1696240800&v=beta&t=TQh1GvobwvOoEVNo9whTnYz2vmWkWvxZwrfEROyCQhc"
                alt="video"
              />
            </Col>
            <Col xs={8} className="d-flex justify-content-start ">
              <p className="fw-bold text-truncate">Gestione dei progetti semplificata</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="mb-2 border text-center rounded p-0 bg-light">
          <img
            className="rounded img-fluid"
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="adv"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default SideBar;
