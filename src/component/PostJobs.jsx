import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/action";

import SingleJob from "./SingleJob";
import { useParams } from "react-router-dom";

const PostJobs = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.jobs.content);
  const allFavJobs = useSelector((state) => state.favouriteJobs.content);
  const [isLoad, setIsLoad] = useState(false);

  const fetchAllJobs = async () => {
    setIsLoad(true);
    const resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
      },
    });
    const data = await resp.json();
    dispatch(setJobs(data));
    setIsLoad(false);
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
        {allFavJobs.length > 0 ? (
          allFavJobs.map((job) => <SingleJob key={job._id} job={job} />)
        ) : (
          <span className="text-info m-2">puoi salvare le offerte di lavoro che ti interessano</span>
        )}
      </Row>
      <Row className="border rounded bg-white gy-3 mt-3">
        <h4>Offerte di Lavoro:</h4>
        {isLoad ? (
          <Spinner className="m-5" variant="success" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          allJobs &&
          allJobs.data.map((job) => {
            return allFavJobs.find((fav) => fav._id === job._id) ? "" : <SingleJob key={job._id} job={job} />;
          })
        )}
      </Row>
    </Container>
  );
};
export default PostJobs;
