import { ADD_JOBS, DEL_JOBS, SET_JOBS } from "../action";

const initialState = {
  content: null,
  favourite: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return { ...state, content: action.payload };
    case ADD_JOBS:
      return { ...state, favourite: [...state.favourite, action.payload] };
    case DEL_JOBS:
      return { ...state, favourite: state.favourite.filter((fav) => fav !== action.payload) };

    default:
      return state;
  }
};
export default jobsReducer;
