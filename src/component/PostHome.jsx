import { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { fetchAllPost, fetchMeProfile } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import { BsCardImage } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import ModalPost from "./ModalPost";

const PostHome = () => {
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state.post.content);
  const myProfile = useSelector((state) => state.profile.content);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchMeProfile());
    dispatch(fetchAllPost());
  }, []);

  return (
    <Container>
      <Row className="bg-white mt-4">
        <Col xs={12} className="p-3">
          <div className="d-flex">
            <img
              src={myProfile.image}
              alt="img-profile"
              className="rounded-circle border me-1"
              style={{ width: "50px", height: "50px" }}
            />

            <Button
              onClick={() => handleShow()}
              className="text-start text-secondary bg-secondary bg-opacity-25 rounded-pill px-4  mx-2 w-100"
              variant="outline-secondary"
            >
              Avvia un post
            </Button>
          </div>
        </Col>
        <Col xs={12}>
          <Button className="text-secondary bg-white border border-0">
            <span style={{ fontSize: "13px" }}>
              <BsCardImage />
              Contenuti multimediali
            </span>
          </Button>

          <Button className="text-secondary bg-white border border-0">
            <span style={{ fontSize: "13px" }}>
              <FaCalendarAlt />
              Evento
            </span>
          </Button>

          <Button className="text-secondary bg-white border border-0">
            <span style={{ fontSize: "13px" }}>
              <RiArticleLine />
              Scrivi un articolo
            </span>
          </Button>
        </Col>
      </Row>
      {allPost.map((post, index) => {
        if (index < 50) {
          return <SinglePost key={`id-${post._id}`} post={post} />;
        }
      })}
      <ModalPost show={show} setShow={setShow} />
    </Container>
  );
};
export default PostHome;
