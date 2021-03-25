import { SET_PERSONNELS, SET_SEARCH_PERSONNEL, SET_FIND_PERSONNEL } from "../types";

export default (payload:any) => (dispatch:any) => {
  dispatch({
    type: SET_PERSONNELS,
    payload: payload,
  }, {
    type: SET_SEARCH_PERSONNEL,
    payload: payload
  }, {
    type: SET_FIND_PERSONNEL,
    payload: payload
  });
};
