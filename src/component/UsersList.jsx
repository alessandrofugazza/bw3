import { Button, Card, Col, Row } from "react-bootstrap";
import { CgUserAdd } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../redux/action";
import { useEffect, useState } from "react";

const UsersList = () => {
  const allUsers = useSelector((state) => state.users.content);
  const allFriends = useSelector((state) => state.friends.content);

  const dispatch = useDispatch();

  //   {
  // allFriends.map((friend) =>
  //   friend._id !== user._id ? (
  //     ""
  //   ) : ())}

  return (
    <Row className="gy-2">
      {allUsers.map((user, i) => (
        <Col key={user._id} xs={4} lg={3}>
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
                <img className="img-fluid" src={user.image} alt="img-profile" />
              </div>
            </div>
            <Card.Body className="text-center mt-4 d-flex flex-column justify-content-between">
              <div>
                <Card.Title>
                  {user.name} {user.surname}
                </Card.Title>
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
      ))}
    </Row>
  );
};
export default UsersList;
