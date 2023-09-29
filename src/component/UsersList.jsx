import { Row } from "react-bootstrap";

import { useSelector } from "react-redux";

import SingleUserCard from "./SingleUserCard";

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
