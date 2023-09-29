import { Button, Card, Col } from "react-bootstrap";
import { CgUserAdd } from "react-icons/cg";
import { addFriend } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SingleUserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <Col xs={10} sm={6} md={4} xl={3}>
      <Card className="h-100">
        <div className="position-relative">
          <Card.Img
            style={{ height: "80px" }}
            variant="top"
            src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          />
          <div
            className="position-absolute bg-secondary rounded-circle"
            style={{
              overflow: "hidden",
              height: "70px",
              width: "70px",
              top: "43px",
              left: "32%",
              border: "2px solid white",
            }}
          >
            {" "}
            <Link className="nav-link" to={"/" + user._id}>
              <img className="img-fluid" src={user.image} alt="img-profile" />{" "}
            </Link>
          </div>
        </div>
        <Card.Body className="text-center mt-4 d-flex flex-column justify-content-between">
          <div>
            <Link className="nav-link" to={"/" + user._id}>
              <Card.Title>
                {user.name} {user.surname}
              </Card.Title>
            </Link>
            <Card.Text>{user.title}.</Card.Text>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addFriend(user));
            }}
            className="me-2 rounded-pill px-3 py-1"
            variant="primary"
          >
            <CgUserAdd className="fs-4" />
            Collegati
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleUserCard;
