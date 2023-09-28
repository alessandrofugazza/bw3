import { SET_USERS } from "../action";

const initialState = {
  content: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { content: action.payload };

    default:
      return state;
  }
};
export default usersReducer;
