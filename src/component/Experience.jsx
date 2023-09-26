import { Col, Container, Row } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "../redux/action";
import { useEffect } from "react";

const Experience = () => {
  const experience = useSelector((state) => state.experience.content);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.content);
  const idUser = profile._id;

  const fecthExperience = async () => {
    try {
      const resp = fetch("https://barbie-linkedin.cyclic.cloud/api/profile/" + idUser + "/experiences", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",

          team: "team-3",
        },
      });
      const data = (await resp).json();
      dispatch(setExperience(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fecthExperience();
  }, [idUser]);
  return (
    <Container className="p-4">
      <Row className=" border border-bottom-0 gx-5">
        <Col xs={12} className="d-flex justify-content-between align-items-center pt-3">
          <h6 className="fw-bold">Esperienze</h6>
          <div>
            <AiOutlinePlus className="fs-3 text-secondary mx-4" />
            <BiPencil className="fs-3 text-secondary" />
          </div>
        </Col>
      </Row>
      {experience.length > 0 &&
        experience.map((exp) => (
          <Row className=" border border-top-0 pb-3 gx-5">
            <Col xs={1}>
              <div className="bg-secondary" style={{ width: "40px", height: "40px" }}></div>
            </Col>
            <Col xs={10}>
              <span className="fw-semibold">Cameriere</span> <br />
              <span>ristorante -partime</span> <br />
              <span className="text-secondary ">giu 2023 - ago 2023</span> <br />
              <span className="text-secondary ">roma,italy</span>
            </Col>
          </Row>
        ))}
    </Container>
  );
};
export default Experience;
