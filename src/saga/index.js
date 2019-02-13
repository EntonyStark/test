import { fork } from "redux-saga/effects";

import auth from "./auth";
import userList from "./userList";

export default function*() {
	yield fork(auth);
	yield fork(userList);
}
