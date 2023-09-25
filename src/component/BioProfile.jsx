import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { setProfile } from "../redux/action";
import { async } from "q";

const BioProfile = () => {
  const profile = useSelector((state) => state.profile.content);
  const [info, setInfo] = useState(null);
  const [show, setShow] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchMeProfile = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        },
      });
      const data = await resp.json();
      dispatch(setProfile(data));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchIdProfile = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + params.id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        },
      });
      const data = await resp.json();

      dispatch(setProfile(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    params.id ? fetchIdProfile(params.id) : fetchMeProfile();
  }, [params.id]);

  useEffect(() => {
    setInfo({
      name: profile.name,
      surname: profile.surname,
      area: profile.area,
      bio: profile.bio,
      title: profile.title,
    });
  }, [profile]);

  const changeInfo = (value, name) => {
    setInfo({ ...info, [name]: value });
  };

  const fetchModal = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
          "Content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
      fetchMeProfile();
    } catch (error) {}
  };
  return (
    <>
      <Container className="p-4">
        <Card style={{ width: "100%" }}>
          <Card.Img
            style={{ height: "200px" }}
            variant="top"
            src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body className="text-start position-relative">
            <div className="text-end mt-2 ">
              <BiPencil onClick={() => handleShow()} className="fs-3 text-secondary" />
            </div>
            <div
              style={{
                width: "100px",
                height: "100px",
                position: "absolute",
                backgroundColor: "red",
                top: "-85px",
                borderRadius: "50%",
                border: "4px solid white",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  width: "92px",
                }}
                src={profile.image}
                alt="immagine profilo"
              />
            </div>
            <Card.Title className="mb-0">
              {profile.name} {profile.surname}
            </Card.Title>
            <Card.Text className="m-0 p-0">{profile.title}</Card.Text>
            <span>{profile.area} • </span>{" "}
            <Link className="text-decoration-none text-primary">ulteriori informazioni</Link>
            <br />
            <Link className="text-decoration-none text-primary">3 collegamenti</Link>
            <div className="mt-2">
              <Button className="me-2 rounded-pill px-3 py-1" variant="primary">
                Disponibile per
              </Button>
              <Button className="me-2 rounded-pill px-3 py-1" variant="outline-primary">
                Aggiungi sezione profilo
              </Button>
              <Button className="me-2 rounded-pill px-3 py-1" variant="outline-secondary">
                Altro
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      {/* {info &&
        !params.id(
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
                    Nome
                  </Form.Label>

                  <Form.Control
                    type="text"
                    value={info.name}
                    onChange={(e) => changeInfo(e.target.value, "name")}
                    placeholder="inserisci Nome"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label column sm="2">
                    Cognome
                  </Form.Label>

                  <Form.Control
                    type="text"
                    value={info.surname}
                    onChange={(e) => changeInfo(e.target.value, "surname")}
                    placeholder="inserisci Cognome"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label column sm="2">
                    Luogo
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={info.area}
                    onChange={(e) => changeInfo(e.target.value, "area")}
                    placeholder="inserisci Città, Regione, Stato"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label column sm="2">
                    Competenze
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={info.title}
                    onChange={(e) => changeInfo(e.target.value, "title")}
                    placeholder="inserisci un Ruolo"
                  />
                </Form.Group>

                <InputGroup>
                  <InputGroup.Text>Bio:</InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    value={info.bio}
                    onChange={(e) => changeInfo(e.target.value, "bio")}
                    aria-label="scrivi una bio"
                  />
                </InputGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={() => fetchModal()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )} */}
    </>
  );
};
export default BioProfile;
