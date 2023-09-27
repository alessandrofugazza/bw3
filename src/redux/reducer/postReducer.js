import { SET_POST } from "../action";

const initialState = {
  content: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { content: action.payload };

    default:
      return state;
  }
};
export default postReducer;
