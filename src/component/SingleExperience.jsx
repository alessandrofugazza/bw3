import { async } from "q";
import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const SingleExperience = ({ exp, fecthExperience }) => {
  const [experience, setExperience] = useState(exp);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  const profile = useSelector((state) => state.profile.content);
  const idUser = profile._id;

  const changeExperience = (value, name) => {
    setExperience({ ...experience, [name]: value });
  };

  const fetchPutExperience = async (expId) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + idUser + "/experiences/" + expId,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
            "Content-type": "application/json",
          },
          body: JSON.stringify(experience),
        }
      );
      fecthExperience();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRemoveExp = async (expId) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + idUser + "/experiences/" + expId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
            "Content-type": "application/json",
          },
        }
      );
      handleClose();
      fecthExperience();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setExperience({
      role: exp.role,
      company: exp.company,
      area: exp.area,
      description: exp.description,
      startDate: exp.startDate,
      endDate: exp.endDate,
    });
  }, [exp]);
  return (
    <>
      <Row className=" border-bottom mt-3 pb-3 gx-5">
        <Col xs={1}>
          <div className="bg-secondary" style={{ width: "40px", height: "40px" }}>
            {exp.img && <img alt="img-azienda" src={exp.img} />}
          </div>
        </Col>
        <Col xs={9}>
          <span className="fw-semibold">{exp.role}</span> <br />
          <span>{exp.company}</span> <br />
          <span className="text-secondary ">
            {exp.startDate}- {exp.endDate}
          </span>{" "}
          <br />
          <span className="text-secondary ">{exp.area}</span>
        </Col>
        <Col xs={1}>
          {location.pathname === "/experience" && (
            <BiPencil onClick={() => handleShow()} className="fs-3 text-secondary" />
          )}
        </Col>
      </Row>

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
                required
                value={experience.company}
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
              <Form.Control
                required
                type="date"
                value={experience.startDate}
                onChange={(e) => changeExperience(e.target.value, "startDate")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label column sm="2">
                Data Fine
              </Form.Label>
              <Form.Control
                required
                type="date"
                value={experience.endDate}
                onChange={(e) => changeExperience(e.target.value, "endDate")}
              />
            </Form.Group>
            <InputGroup>
              <InputGroup.Text>Descrizione</InputGroup.Text>
              <Form.Control
                as="textarea"
                required
                value={experience.description}
                onChange={(e) => changeExperience(e.target.value, "description")}
                aria-label="scrivi una descrizione"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => fetchRemoveExp(exp._id)}>
            Remove
          </Button>
          <Button variant="primary" type="submit" onClick={() => fetchPutExperience(exp._id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SingleExperience;
