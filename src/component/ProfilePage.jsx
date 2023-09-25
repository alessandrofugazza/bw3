import { Col, Container, Row } from "react-bootstrap";
import Main from "./Main";
import SideBar from "./SideBar";

const ProfilePage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10}>
            <Row>
              <Col xs={12} lg={8}>
                {" "}
                <Main />
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
export default ProfilePage;
