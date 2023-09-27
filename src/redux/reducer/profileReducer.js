import { SET_PROFILE } from "../action";

const initialState = {
  content: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { content: action.payload };

    default:
      return state;
  }
};
export default profileReducer;
