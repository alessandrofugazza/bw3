import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import ModalPost from "./ModalPost";
import { ArrowRight } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPost } from "../redux/action";
import SinglePost from "./SinglePost";

const AttivitaProfile = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.content.username);
  const allPost = useSelector((state) => state.post.content);
  const [postProfile, setPostProfile] = useState();

  useEffect(() => {
    dispatch(fetchAllPost());
  }, []);

  useEffect(() => {
    setPostProfile(allPost.filter((post) => userId === post.user.username));
  }, [allPost]);

  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex flex-column">
              <Card.Title>Attività</Card.Title>
              <p className="text-primary fw-bold m-0">0 Follower</p>
            </div>
            {location.pathname === "/" && (
              <Button variant="outline-primary" className="rounded-pill" onClick={handleShow}>
                Aggiungi un post
              </Button>
            )}
          </div>
          <Row>
            {postProfile ? (
              postProfile.map((post) => <SinglePost post={post} />)
            ) : (
              <Col xs={12}>
                <h6>Non ci sono ancora post</h6>
                <p>I post che creerai verranno visualizzati qui.</p>
              </Col>
            )}

            <Col xs={12}>
              <Button className="w-100" variant="outline-secondary">
                Mostra tutte le attività <ArrowRight />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <ModalPost show={show} setShow={setShow} />
    </>
  );
};
export default AttivitaProfile;
