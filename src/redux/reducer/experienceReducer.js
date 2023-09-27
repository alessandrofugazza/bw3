import { SET_EXPERIENCE } from "../action";

const initialState = {
  content: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERIENCE:
      return { content: action.payload };

    default:
      return state;
  }
};
export default experienceReducer;
