import { takeEvery } from "redux-saga/effects";

import * as types from "../../constants/actionTypes";
import login from "./login";

function* auth() {
	yield takeEvery(types.AUTH_REQUEST, login);
}

export default auth;
