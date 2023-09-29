import { Card, Col } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addJobs, delJobs, setJobs } from "../redux/action";

const SingleJob = ({ job }) => {
  const favourite = useSelector((state) => state.favouriteJobs.content);
  const dispatch = useDispatch();

  const fetchCompany = async () => {
    const resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + job.company_name, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
      },
    });
    const data = await resp.json();
    dispatch(setJobs(data));
  };

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
            <Card.Subtitle
              className="mb-2 text-muted"
              onClick={() => {
                fetchCompany();
              }}
            >
              {job.company_name}
            </Card.Subtitle>
            <Card.Text>{job.candidate_required_location}</Card.Text>
            <Card.Link href={job.url}>Link Company</Card.Link>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};
export default SingleJob;
