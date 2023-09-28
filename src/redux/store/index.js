import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import experienceReducer from "../reducer/experienceReducer";
import postReducer from "../reducer/postReducer";
import jobsReducer from "../reducer/jobsReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experience: experienceReducer,
  post: postReducer,
  jobs: jobsReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
