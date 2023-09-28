import { useState } from "react";
import { Badge, Button, Card, Col, Container, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import { ArrowRight, BroadcastPin, EyeFill, PeopleFill, Plus } from "react-bootstrap-icons";
import { BiPencil } from "react-icons/bi";
import ModalPost from "./ModalPost";
import AttivitaProfile from "./AttivitàProfile";
import { useParams } from "react-router-dom";

const LowerSection = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const params = useParams();

  return (
    <Container className="p-0 mt-3">
      {!params.id && (
        <>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Consigliato per te</Card.Title>
              <p className="mb-2 text-muted">
                <EyeFill /> Solo per te
              </p>
              <div>
                <h5>Intermedio</h5>
                <div className="d-flex align-items-center">
                  <div style={{ height: "10px", width: "25rem" }} className="progress me-2">
                    <div className="progress-bar w-75" role="progressbar"></div>
                  </div>
                  <span className="text-muted">5/7</span>
                </div>
                <p>
                  Completa 2 passaggi per raggiungere il livello <span className="text-primary fw-bold">Massimo</span>
                </p>
              </div>
              <Row>
                <Col xs={12} md={6}>
                  <Card className="h-100">
                    <Card.Body>
                      <Row className="align-items-center mb-2">
                        <Col xs={4}>
                          <img
                            className="img-fluid"
                            src="data:image/png;base64,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"
                            alt="toolbox"
                          />
                        </Col>
                        <Col xs={8}>
                          <h6 className="fw-bold">Dove lavori attualmente?</h6>
                        </Col>
                      </Row>

                      <Card.Text>
                        Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più
                        visualizzazioni del profilo.
                      </Card.Text>
                      <Button className="rounded-pill" variant={"outline-secondary"}>
                        Aggiungi posizione
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card className="h-100">
                    <Card.Body>
                      <Row>
                        <Col xs={4}>
                          <img
                            src="data:image/png;base64,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"
                            alt="form"
                            className="img-fluid"
                          />
                        </Col>
                        <Col xs={8}>
                          <h6 className="fw-bold">
                            Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza
                            lavorativa
                          </h6>
                        </Col>
                      </Row>

                      <Card.Text>
                        Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.
                      </Card.Text>
                      <Button className="rounded-pill" variant={"outline-secondary"}>
                        Aggiungi un riepilogo
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Analisi</Card.Title>
              <p className="mb-2 text-muted">
                <EyeFill /> Solo per te
              </p>
              <Row>
                <Col xs={1}>
                  <PeopleFill />
                </Col>
                <Col className="p-md-0" xs={11}>
                  <h6 className="fw-bold">2 visualizzazioni del profilo</h6>
                  <p className="text-muted">Scopri chi ha visitato il tuo profilo.</p>
                </Col>
              </Row>
              <div>
                <Button className="w-100" variant="outline-secondary">
                  Mostra tutte le analisi <ArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Risorse</Card.Title>
              <p className="mb-2 text-muted">
                <EyeFill /> Solo per te
              </p>
              <Row className="border-bottom">
                <Col xs={1}>
                  <BroadcastPin />
                </Col>
                <Col className="p-md-0" xs={11}>
                  <h6 className="fw-bold d-inline-block me-2">Modalità creazione di contenuti</h6>
                  <Badge className="bg-secondary">No</Badge>
                  <p className="text-muted">
                    Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={1}>
                  <PeopleFill />
                </Col>
                <Col className="p-md-0 " xs={11}>
                  <h6 className="fw-bold d-inline-block ">La mia rete</h6>

                  <p className="text-muted">Salva e gestisci i tuoi collegamenti e interessi.</p>
                </Col>
              </Row>
              <div>
                <Button className="w-100" variant="outline-secondary">
                  Mostra tutte le risorse <ArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>{" "}
        </>
      )}
      <AttivitaProfile />
      <Card className="mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Card.Title>Formazione</Card.Title>
            <div>
              {!params.id && (
                <>
                  <Plus className="fs-3 text-secondary" />
                  <BiPencil className="fs-3 text-secondary" />
                </>
              )}
            </div>
          </div>

          <Row>
            <Col className="d-none d-md-inline-block" xs={12} md={2}>
              <img
                style={{ width: "50px" }}
                className="img-fluid"
                src="https://media.licdn.com/dms/image/C4E0BAQEIYn-6A5h5Qg/company-logo_200_200/0/1519879682772?e=1703721600&v=beta&t=2BIAJSfbfJ5B26RVqcQ39_JseV7wBfxcKSKLj-yI7Ys"
                alt="logo"
              />
            </Col>
            <Col xs={12} md={10}>
              <h6 className="fw-bold">Università degli studi di Palermo</h6>
              <p className="text-muted m-0">Laura triennale in Arti Figurative. Musica. Spettacolo e Moda</p>
              <p className="fw-light text-muted m-0">set 2020 - lug 2023</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Card.Title>Competenze</Card.Title>
            <div>
              <Button variant="outline-primary" className="rounded-pill">
                Quiz valutazione competenze
              </Button>
              {!params.id && (
                <>
                  <Plus className="fs-3 text-secondary" />
                  <BiPencil className="fs-3 text-secondary" />
                </>
              )}
            </div>
          </div>
          <Row>
            <Col className="border-bottom mb-2" xs={12}>
              <h6 className="text-muted">Musica</h6>
            </Col>
            <Col className="border-bottom mb-2" xs={12}>
              <h6 className="text-muted">Cantautore</h6>
            </Col>
            <Col className="border-bottom mb-2" xs={12}>
              <h6 className="text-muted">Canto</h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>Interessi</Card.Title>

          <Row>
            <Col className="d-none d-md-inline-block" xs={12} md={2}>
              <img
                style={{ width: "50px" }}
                className="img-fluid"
                src="https://media.licdn.com/dms/image/C4E0BAQEIYn-6A5h5Qg/company-logo_200_200/0/1519879682772?e=1703721600&v=beta&t=2BIAJSfbfJ5B26RVqcQ39_JseV7wBfxcKSKLj-yI7Ys"
                alt="logo"
              />
            </Col>
            <Col xs={12} md={10}>
              <h6 className="fw-bold m-0">Università degli studi di Palermo</h6>
              <p className="text-muted ">108.989 follower</p>
              <Button className="rounded-pill" variant="outline-secondary">
                Già segui
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <ModalPost show={show} setShow={setShow} />
    </Container>
  );
};

export default LowerSection;
