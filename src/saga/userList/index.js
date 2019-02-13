import { takeEvery } from "redux-saga/effects";

import * as types from "../../constants/actionTypes";
import getUserList from "./getList";

function* userList() {
	yield takeEvery(types.GET_USER_LIST, getUserList);
}

export default userList;
