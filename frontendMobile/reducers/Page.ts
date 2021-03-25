import {
  initialStatePage,
  SET_CURRENT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_NEXT_PAGE,
} from "../types";

const initialState: initialStatePage = {
  CurrentPage: 1,
  PreviousPage: true,
  NextPage: false,
};

export default (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
      case SET_CURRENT_PAGE:
      return {...state, CurrentPage: payload};
    case SET_PREVIOUS_PAGE:
      return {...state, PreviousPage: payload};
    case SET_NEXT_PAGE:
      return {...state, NextPage: payload};
    default:
      return state;
  }
};
