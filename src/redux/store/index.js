import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import experienceReducer from "../reducer/experienceReducer";
import postReducer from "../reducer/postReducer";
import jobsReducer from "../reducer/jobsReducer";
import friendReducer from "../reducer/friendReducer";
import usersReducer from "../reducer/usersReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favouriteJobsReducer from "../reducer/favouriteJobsReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  experience: experienceReducer,
  post: postReducer,
  jobs: jobsReducer,
  favouriteJobs: favouriteJobsReducer,
  friends: friendReducer,
});

const persistedReducer = persistReducer({ key: "root", whitelist: ["friends", "favouriteJobs"], storage }, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistedStore = persistStore(store);
export default store;
