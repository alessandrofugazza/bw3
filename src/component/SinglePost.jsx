import { Card } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import ModalPutDelPost from "./ModalPutDelPost";
import { useState } from "react";

const SinglePost = ({ post }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="my-2">
        <div
          className="d-flex
        "
        >
          <img
            src={post.user.image}
            alt="img-profile"
            style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "10px" }}
          />
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <Card.Title>{post.username}</Card.Title>{" "}
              <BiPencil onClick={() => handleShow()} className="fs-3 text-secondary" />
            </div>
            <Card.Subtitle className="mb-2 text-muted">{post.user.title}</Card.Subtitle>
            <Card.Text>{post.text}</Card.Text>
          </Card.Body>
        </div>
      </Card>
      <ModalPutDelPost show={show} setShow={setShow} post={post} />
    </>
  );
};
export default SinglePost;
