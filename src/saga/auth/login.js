import * as actions from "../../actions/auth";
import { call, put } from "redux-saga/effects";
import { LOGIN } from "../../constants/apiUrls";

import axios from "../../axiosConfig";

export default function* authReques({ payload }) {
	try {
		const { data } = yield call(axios, { data: payload, method: "POST", url: LOGIN });

		localStorage.setItem("token", JSON.stringify(data.token));

		yield put(actions.authRequesSuccess(data));
	} catch (e) {
		yield put(actions.authRequesFail(e.response));
	}
}
