export const SET_PROFILE = "SET_PROFILE";
export const SET_EXPERIENCE = "SET_EXPERIECE";
export const SET_POST = "SET_POST";
export const SET_JOBS = "SET_JOBS";
export const ADD_JOBS = "ADD_JOBS";
export const DEL_JOBS = "DEL_JOBS";

export const setProfile = (data) => ({ type: SET_PROFILE, payload: data });
export const setExperience = (data) => ({ type: SET_EXPERIENCE, payload: data });
export const setJobs = (data) => ({ type: SET_JOBS, payload: data });
export const addJobs = (data) => ({ type: ADD_JOBS, payload: data });
export const delJobs = (data) => ({ type: DEL_JOBS, payload: data });

export const fetchAllPost = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        },
      });
      const data = await resp.json();

      dispatch({ type: SET_POST, payload: data.reverse() });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchMeProfile = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzliYjM3NTJhODAwMTQ1Njg3NjUiLCJpYXQiOjE2OTU2Mjc3MDcsImV4cCI6MTY5NjgzNzMwN30.4BcdJm9NGzCRCfUXd__fN8D0mZG4DURnYc4zl0Oh6Uk",
        },
      });
      const data = await resp.json();

      dispatch(setProfile(data));
    } catch (error) {
      console.log(error);
    }
  };
};
