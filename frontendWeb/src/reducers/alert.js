import { SET_ALERT, REMOVE_ALERT } from "../actions/type";

const initialState = [];

const Alert = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      state.shift()
      return [...state, payload];
    case REMOVE_ALERT:
      state.shift()
      return state
    default:
      return state;
  }
};
export default Alert;
