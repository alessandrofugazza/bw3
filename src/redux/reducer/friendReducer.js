import { ADD_FRIEND, DEL_FRIEND } from "../action";

const initialState = {
  content: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return { content: [...state.content, action.payload] };
    case DEL_FRIEND:
      return { content: state.content.filter((friend) => friend._id !== action.payload._id) };

    default:
      return state;
  }
};
export default friendReducer;
