import { Card, Col } from "react-bootstrap";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addJobs, delJobs } from "../redux/action";

const SingleJob = ({ job }) => {
  const favourite = useSelector((state) => state.jobs.favourite);
  const dispatch = useDispatch();

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
            <div className="d-flex justify-content-between align-items-center">
              <Card.Title>{job.title}</Card.Title>

              {favourite.find((fav) => fav._id === job._id) ? (
                <BsFillBookmarkFill className="fs-4 text-primary" onClick={() => dispatch(delJobs(job))} />
              ) : (
                <BsFillBookmarkFill className="fs-4 text-secondary" onClick={() => dispatch(addJobs(job))} />
              )}
            </div>
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
