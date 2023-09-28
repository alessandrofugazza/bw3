import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/action";

import SingleJob from "./SingleJob";

const PostJobs = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.jobs.content);
  const fetchAllJobs = async () => {
    const resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
      },
    });
    const data = await resp.json();
    dispatch(setJobs(data));
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);
  return (
    <Container>
      <Row className="border rounded bg-white gy-3">
        {allJobs && allJobs.data.map((job) => <SingleJob key={job._id} job={job} />)}
      </Row>
    </Container>
  );
};
export default PostJobs;
