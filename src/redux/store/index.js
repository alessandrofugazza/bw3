import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import experienceReducer from "../reducer/experienceReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experience: experienceReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
