import { Col, Container, Row } from "react-bootstrap";
import LinkJobs from "./LinkJobs";
import SmallFooter from "./SmallFooter";
import PostJobs from "./PostJobs";

const JobsPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={3}>
          <LinkJobs />
        </Col>
        <Col xs={12} lg={5}>
          <PostJobs />
        </Col>
        <Col xs={12} lg={4}>
          <SmallFooter />
        </Col>
      </Row>
    </Container>
  );
};
export default JobsPage;
