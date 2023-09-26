export const SET_PROFILE = "SET_PROFILE";
export const SET_EXPERIENCE = "SET_EXPERIECE";
export const ADD_EXPERIENCE = "ADD_EXPERIECE";
export const DEL_EXPERIENCE = "DEL_EXPERIECE";

export const setProfile = (data) => ({ type: SET_PROFILE, payload: data });
export const setExperience = (data) => ({ type: SET_EXPERIENCE, payload: data });
export const addExperience = (data) => ({ type: ADD_EXPERIENCE, payload: data });
export const delExperience = (data) => ({ type: DEL_EXPERIENCE, payload: data });
