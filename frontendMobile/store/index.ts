import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, {ThunkMiddleware,} from "redux-thunk";
import rootReducer from "../reducers";
import { thunkType } from '../types'

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<thunkType>))
);

export default store;
