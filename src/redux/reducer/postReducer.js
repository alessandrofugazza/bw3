import { SET_LOAD, SET_POST } from "../action";

const initialState = {
  content: [],
  load: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, content: action.payload };
    case SET_LOAD:
      return { ...state, load: action.payload };

    default:
      return state;
  }
};
export default postReducer;
