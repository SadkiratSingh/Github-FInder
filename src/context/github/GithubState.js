// in this file we manage our app level state.
// App.js becomes complex with multiple states, so we we use useReducer to manage multiple states.

import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";

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
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        alert: state.alert,
        repos: state.repos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
