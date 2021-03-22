import { combineReducers } from "redux";
import Alert from "./alert";
import Personnels from "./personnels"
import Page from "./page"

export default combineReducers({
  Alert,
  Personnels,
  Page
});
