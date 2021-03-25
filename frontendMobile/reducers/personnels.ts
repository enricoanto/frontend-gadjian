import {
  initialStatePersonnels,
  SET_PERSONNELS,
  SET_SEARCH_PERSONNEL,
  SET_FIND_PERSONNEL
} from "../types";

const initialState: initialStatePersonnels = {
  Personnels: [],
  PersonnelsPerPage: 4,
  SearchPersonnel: "",
  FindPersonnel: []
};

const Personnels = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PERSONNELS:
      return { ...state, Personnels: payload };
    case SET_SEARCH_PERSONNEL:
      return {...state, SearchPersonnel: payload}
      case SET_FIND_PERSONNEL:
        return {...state, FindPersonnel: payload}
    default:
      return state;
  }
};
export default Personnels;
