import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  let initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlertHandler = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert: setAlertHandler,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
