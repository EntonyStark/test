import * as actions from "../../actions/list";
import { call, put } from "redux-saga/effects";
import { GET_USER_LIST } from "../../constants/apiUrls";

import axios from "../../axiosConfig";

export default function* getUserList({ payload }) {
	try {
		const { data } = yield call(axios, { url: GET_USER_LIST, params: payload ? payload : {} });

		yield put(actions.getUserListSuccess(data));
	} catch (e) {
		yield put(actions.getUserListFail(e.response));
	}
}
