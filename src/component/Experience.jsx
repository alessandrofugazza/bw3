import { Button, Col, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "../redux/action";
import { useEffect, useState } from "react";
import SingleExperience from "./SingleExperience";
import { Link, useLocation } from "react-router-dom";
import { async } from "q";

const Experience = () => {
  const experience = useSelector((state) => state.experience.content);
  const dispatch = useDispatch();
  const location = useLocation();
  const profile = useSelector((state) => state.profile.content);
  const idUser = profile._id;
  const [show, setShow] = useState(false);
  const [expPost, setExpPost] = useState("");
  const [dataFine, setDataFine] = useState("");
  const [dataInizio, setDataInizio] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeExperience = (value, name) => {
    setExpPost({ ...expPost, [name]: value });
  };

  const fecthExperience = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idUser + "/experiences", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        },
      });
      const data = await resp.json();
      dispatch(setExperience(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fecthExpPost = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/:userId/experiences", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
          "Content-type": "application/json",
        },
        body: JSON.stringify(expPost),
      });
      handleClose();
      fecthExperience();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idUser) {
      fecthExperience();
    }
  }, [idUser]);

  useEffect(() => {
    setExpPost({
      role: "",
      company: "",
      area: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  }, []);

  return (
    <>
      <Container className="px-4 border bg-white mt-3 ">
        <Row className="  gx-5">
          <Col xs={12} className="d-flex justify-content-between align-items-center pt-3">
            <h6 className="fw-bold">Esperienze</h6>
            {idUser === "651139bb3752a80014568765" && (
              <div>
                <AiOutlinePlus onClick={() => handleShow()} className="fs-3 text-secondary mx-4" />
                <Link to="/experience">
                  {location.pathname === "/" && <BiPencil className="fs-3 text-secondary" />}
                </Link>
              </div>
            )}
          </Col>
        </Row>
        {experience.length > 0 ? (
          experience.map((exp) => <SingleExperience exp={exp} />)
        ) : (
          <Row>
            <Col>
              <h6>Non ci sono esperienze caricate</h6>
            </Col>
          </Row>
        )}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label column sm="2">
                Ruolo
              </Form.Label>

              <Form.Control
                type="text"
                required
                value={experience.role}
                onChange={(e) => changeExperience(e.target.value, "role")}
                placeholder="inserisci ruolo"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label column sm="2">
                Azienda
              </Form.Label>

              <Form.Control
                type="text"
                value={experience.company}
                required
                onChange={(e) => changeExperience(e.target.value, "company")}
                placeholder="inserisci l'Azienda"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label column sm="2">
                Luogo
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={experience.area}
                onChange={(e) => changeExperience(e.target.value, "area")}
                placeholder="inserisci Città, Regione, Stato"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label column sm="2">
                Data Inizio
              </Form.Label>
              <Form.Control required type="date" onChange={(e) => changeExperience(e.target.value, "startDate")} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label column sm="2">
                Data Fine
              </Form.Label>
              <Form.Control required type="date" onChange={(e) => changeExperience(e.target.value, "endDate")} />
            </Form.Group>

            <InputGroup>
              <InputGroup.Text>Descrizione:</InputGroup.Text>
              <Form.Control
                as="textarea"
                value={experience.description}
                required
                onChange={(e) => changeExperience(e.target.value, "description")}
                aria-label="scrivi una descrizione"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => fecthExpPost()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Experience;
