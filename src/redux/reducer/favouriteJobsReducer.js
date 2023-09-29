import { ADD_JOBS, DEL_JOBS } from "../action";

const initialState = {
  content: [],
};

const favouriteJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS:
      return { ...state, content: [...state.content, action.payload] };
    case DEL_JOBS:
      return { ...state, content: state.content.filter((fav) => fav !== action.payload) };

    default:
      return state;
  }
};
export default favouriteJobsReducer;
