import React from "react";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_USERS,
} from "../types";

// currState is the state which re-render happens
const GithubReducer = (currState, action) => {
  let { type, payload } = action;
  if (type === SET_LOADING) {
    return { ...currState, loading: true };
  } else if (type === SEARCH_USERS) {
    return {
      ...currState,
      users: payload,
      loading: false,
    };
  } else if (type === CLEAR_USERS) {
    return {
      ...currState,
      users: [],
      loading: false,
    };
  } else if (type === GET_USER) {
    return {
      ...currState,
      user: payload,
      loading: false,
    };
  } else if (type === GET_REPOS) {
    return {
      ...currState,
      repos: payload,
      loading: false,
    };
  } else {
    return { ...currState };
  }
};

export default GithubReducer;
