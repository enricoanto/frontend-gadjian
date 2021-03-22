import { SET_PERSONNEL, SET_SEARCH } from "../actions/type";

const initialState = {
  personnel: [],
  search: "",
};

const Personnels = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PERSONNEL:
      return { ...state, personnel: payload };
    case SET_SEARCH:
      return {...state, search: payload};
    default:
      return state;
  }
};
export default Personnels;
