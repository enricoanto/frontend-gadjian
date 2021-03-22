import { SET_PREVIOUS_PAGE_BUTTON, SET_NEXT_PAGE_BUTTON, SET_CURRENT_PAGE, SET_PERSONNELS_PER_PAGE } from "../actions/type";

const initialState = {
    previousPageButton: true,
    nextPageButton: false,
    currentPage: 1,
    personnelsPerPage: 4,
};

const Page = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PREVIOUS_PAGE_BUTTON:
      return {...state, previousPageButton: payload};
    case SET_NEXT_PAGE_BUTTON:
      return {...state, nextPageButton: payload};
      case SET_CURRENT_PAGE:
        return {...state, currentPage: payload}
      case SET_PERSONNELS_PER_PAGE:
        return{...state, personnelsPerPage: payload}
    default:
      return state;
  }
};
export default Page;
