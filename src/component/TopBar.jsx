import { useState } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";

const TopBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/lavoro/" + query);
                setQuery("");
              }}
              className="position-relative ms-1"
            >
              <Search
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/lavoro/" + query);
                  setQuery("");
                }}
                className="position-absolute"
                style={{ left: "11px", top: "11px" }}
              />
              <Form.Control
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                type="search"
                placeholder="Search "
                className="me-2 ps-5"
                aria-label="Search"
              />
            </Form>
          </div>
          <Nav className=" my-2 my-lg-0 d-flex justify-content-between" style={{ maxHeight: "100px" }} navbarScroll>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/home">
              <HouseDoorFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Home</span>
              {location.pathname === "/home" ? (
                <div className="bg-black border-transition" style={{ width: "100%", height: "3px" }}></div>
              ) : (
                <div style={{ width: "100%", height: "3px" }}></div>
              )}
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/rete">
              <PeopleFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Rete</span>
              {location.pathname === "/rete" ? (
                <div className="bg-black border-transition" style={{ width: "100%", height: "3px" }}></div>
              ) : (
                <div style={{ width: "100%", height: "3px" }}></div>
              )}
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/lavoro">
              <BriefcaseFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Lavoro</span>
              {location.pathname === "/lavoro" ? (
                <div className="bg-black border-transition" style={{ width: "100%", height: "3px" }}></div>
              ) : (
                <div style={{ width: "100%", height: "3px" }}></div>
              )}
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/messaggi">
              <ChatDotsFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Messaggistica</span>
              {location.pathname === "/messaggi" ? (
                <div className="bg-black border-transition" style={{ width: "100%", height: "3px" }}></div>
              ) : (
                <div style={{ width: "100%", height: "3px" }}></div>
              )}
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/notifiche">
              <BellFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Notifiche</span>
              {location.pathname === "/notifiche" ? (
                <div className="bg-black border-transition" style={{ width: "100%", height: "3px" }}></div>
              ) : (
                <div style={{ width: "100%", height: "3px" }}></div>
              )}
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
              </NavDropdown>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center border-start">
              <Grid3x3GapFill className="fs-4" />
              <NavDropdown title="Per le aziende" id="navbarScrollingDropdown"></NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopBar;
