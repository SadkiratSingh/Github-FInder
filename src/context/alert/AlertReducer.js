import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertReducer = (currState, action) => {
  let { type, payload } = action;
  if (type === SET_ALERT) {
    return payload;
  } else if (type === REMOVE_ALERT) {
    return null;
  } else {
    return currState;
  }
};

export default AlertReducer;
