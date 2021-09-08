// in this file we manage our app level state.
// App.js becomes complex with multiple states, so we we use useReducer to manage multiple states.

import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const GithubState = (props) => {
  let initialState = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: [],
  };
  //state variable has the current state snapshot.
  //value returned by githubReducer will become new state and hence component will be re-rendered, then state var will point to this new state which now becomes current state.
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // we have dispatch fxn with us. We will perform various tasks here to update state via githubReducer. This dispatch fxn will internally call githubReducer. We need to provide action to dispatch only.

  //lets search for users after filling in form
  const searchUsersHandler = async (text) => {
    setLoading();

    let res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // introduce a spinner to show loading.
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        alert: state.alert,
        repos: state.repos,
        onSearchUsers: searchUsersHandler,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
