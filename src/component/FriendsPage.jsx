import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delFriend } from "../redux/action";
import { CgUserRemove } from "react-icons/cg";
import UsersList from "./UsersList";

const FriendsPage = () => {
  const allFriends = useSelector((state) => state.friends.content);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row className="border bg-white mt-3 gy-5 p-3">
        <Col xs={12}>
          <h3>Persone a cui sei collegato:</h3>
          <ListGroup>
            {allFriends.map((friend) => (
              <ListGroup.Item className="my-1 p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className="mx-2"
                      src={friend.image}
                      alt="foto-profilo"
                      style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                    />
                    <div>
                      <h5>
                        {friend.name} {friend.surname}
                      </h5>
                      <span>{friend.title}</span>
                    </div>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(delFriend(friend));
                    }}
                    className="me-2 rounded-pill px-3 py-1"
                    variant="outline-primary"
                  >
                    <CgUserRemove className="fs-4" />
                    Rimuovi Collegamento
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={12}>
          <h3 className="mt-3">Collegati a nuove persone:</h3>
          <UsersList />
        </Col>
      </Row>
    </Container>
  );
};
export default FriendsPage;
