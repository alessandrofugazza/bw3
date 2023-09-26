import { Col, Container, Row } from "react-bootstrap";

import SideBar from "./SideBar";
import Experience from "./Experience";

const ExpPage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10}>
            <Row>
              <Col xs={12} lg={8}>
                {" "}
                <Experience />
              </Col>
              <Col xs={12} lg={4}>
                <SideBar />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ExpPage;
