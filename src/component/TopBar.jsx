import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-center">
      <Container className=" d-flex justify-content-between">
        <Navbar.Collapse id="navbarScroll " className="justify-content-around">
          <div className="d-flex">
            <Link to="/">
              {" "}
              <img
                src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG6.png"
                alt="LinkLogo"
                style={{ width: "35px" }}
              />
            </Link>
            <Form className="position-relative ms-1">
              <Search className="position-absolute" style={{ left: "11px", top: "11px" }} />
              <Form.Control type="search" placeholder="Search " className="me-2 ps-5" aria-label="Search" />
            </Form>
          </div>
          <Nav className=" my-2 my-lg-0 d-flex justify-content-between" style={{ maxHeight: "100px" }} navbarScroll>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/home">
              <HouseDoorFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Home</span>
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/rete">
              <PeopleFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Rete</span>
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/lavoro">
              <BriefcaseFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Lavoro</span>
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/messaggi">
              <ChatDotsFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Messaggistica</span>
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/notifiche">
              <BellFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Notifiche</span>
            </Link>
            <div className="d-flex flex-column justify-content-center align-items-center me-2">
              <div style={{ width: "20px", height: "20px", borderRadius: "50%" }}>
                {" "}
                <img
                  style={{ width: "23px", height: "23px", borderRadius: "50%" }}
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  alt="avatar"
                />{" "}
              </div>
              <NavDropdown title="Tu" id="navbarScrollingDropdown" style={{ paddingBlock: "0 px" }}>
                <Link to="/" className="text-decoration-none">
                  <NavDropdown.Item href="#action3">Your profile</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center border-start">
              <Grid3x3GapFill className="fs-4" />
              <NavDropdown title="Per le aziende" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopBar;
