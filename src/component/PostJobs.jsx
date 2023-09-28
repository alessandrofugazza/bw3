import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/action";

import SingleJob from "./SingleJob";
import { useParams } from "react-router-dom";

const PostJobs = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.jobs.content);
  const allFavJobs = useSelector((state) => state.jobs.favourite);

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

  const fetchQueryJobs = async () => {
    const resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + params.query, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
      },
    });
    const data = await resp.json();
    dispatch(setJobs(data));
  };

  useEffect(() => {
    params.query ? fetchQueryJobs() : fetchAllJobs();
  }, [params.query]);

  return (
    <Container className="mt-4">
      <Row className="border rounded bg-white gy-3">
        <h4>Offerte salvate:</h4>
        {allFavJobs && allFavJobs.map((job) => <SingleJob key={job._id} job={job} />)}
      </Row>
      <Row className="border rounded bg-white gy-3 mt-3">
        {allJobs &&
          allJobs.data.map((job) => {
            return allFavJobs.find((fav) => fav._id === job._id) ? "" : <SingleJob key={job._id} job={job} />;
          })}
      </Row>
    </Container>
  );
};
export default PostJobs;
