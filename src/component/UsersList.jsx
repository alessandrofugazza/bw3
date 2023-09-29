import { Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import SingleUserCard from "./SingleUserCard";
import { setImg } from "../redux/action";

const UsersList = () => {
  const allUsers = useSelector((state) => state.users.content);
  const allFriends = useSelector((state) => state.friends.content);

  return (
    <Row className="gy-2">
      {allUsers &&
        allUsers
          .filter((friend) => !allFriends.map((user) => user._id).includes(friend._id))
          .map((user, i) => i < 20 && <SingleUserCard key={user._id} user={user} />)}
    </Row>
  );
};
export default UsersList;
