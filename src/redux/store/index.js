import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import experienceReducer from "../reducer/experienceReducer";
import postReducer from "../reducer/postReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experience: experienceReducer,
  post: postReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
