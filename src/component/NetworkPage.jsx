import { Col, Container, Row } from "react-bootstrap";
import SmallFooter from "./SmallFooter";
import FriendsPage from "./FriendsPage";

const NetworkPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          <FriendsPage />
        </Col>
        <Col xs={12} lg={4}>
          <SmallFooter />
        </Col>
      </Row>
    </Container>
  );
};
export default NetworkPage;
