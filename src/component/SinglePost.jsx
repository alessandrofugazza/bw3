import { Card } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import ModalPutDelPost from "./ModalPutDelPost";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
          <Link to={`/${post.user._id}`}>
            <img
              src={post.user.image}
              alt="img-profile"
              style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "10px" }}
            />
          </Link>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <Link to={`/${post.user._id}`} className="nav-link">
                <Card.Title>{post.username}</Card.Title>{" "}
              </Link>
              {post.user._id === "651139bb3752a80014568765" && (
                <BiPencil onClick={() => handleShow()} className="fs-3 text-secondary" />
              )}
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
