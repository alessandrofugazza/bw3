import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
} from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">
              <HouseDoorFill />
            </Nav.Link>
            <Nav.Link href="#action2">
              <PeopleFill />
            </Nav.Link>
            <Nav.Link href="#action2">
              <BriefcaseFill />
            </Nav.Link>
            <Nav.Link href="#action2">
              <ChatDotsFill />
            </Nav.Link>
            <Nav.Link href="#action2">
              <BellFill />
            </Nav.Link>
            <NavDropdown title="Tu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <Grid3x3GapFill />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopBar;
