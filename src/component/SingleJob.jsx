import { Card, Col } from "react-bootstrap";

const SingleJob = ({ job }) => {
  return (
    <Col xs={12}>
      <Card className="border-start-0 border-end-0">
        <div className="d-flex">
          <div
            className="mt-2 ms-2"
            style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "grey" }}
          ></div>
          {/* <img className="mt-2 ms-2" src="" alt="logo-company" /> */}
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
            <Card.Text>{job.candidate_required_location}</Card.Text>
            <Card.Link href={job.url}>Link Company</Card.Link>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};
export default SingleJob;
