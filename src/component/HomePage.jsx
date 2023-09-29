import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";

import LeftBarHome from "./LeftBarHome";
import PostHome from "./PostHome";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={3}>
          <LeftBarHome />
        </Col>
        <Col xs={12} lg={5}>
          <PostHome />
        </Col>
        <Col xs={12} lg={4}>
          <SideBar />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
export default HomePage;
