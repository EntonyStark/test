import { combineReducers } from "redux";

import auth from "./auth";
import userList from "./userList";

export default combineReducers({
	auth,
	userList
});
