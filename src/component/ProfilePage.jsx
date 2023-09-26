import { Col, Container, Row } from "react-bootstrap";
import Main from "./Main";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import LowerSection from "./LowerSection";

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
                <LowerSection />
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
