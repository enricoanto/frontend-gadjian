import {
  SET_CURRENT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_NEXT_PAGE,
} from "../types";

export default (payload: any) => (dispatch: any) => {
    console.log(payload)
  dispatch(
    {
      type: SET_CURRENT_PAGE,
      payload: payload,
    },
    {
      type: SET_PREVIOUS_PAGE,
      payload: payload,
    },
    {
      type: SET_NEXT_PAGE,
      payload: payload,
    }
  );
};
