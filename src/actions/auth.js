import * as types from "../constants/actionTypes";

export const authReques = payload => ({
	type: types.AUTH_REQUEST,
	payload
});

export const authRequesSuccess = payload => ({
	type: types.AUTH_REQUEST_SUCCESS,
	payload
});

export const authRequesFail = payload => ({
	type: types.AUTH_REQUEST_FAIL,
	payload
});

export const setToken = payload => ({
	type: types.SET_TOKEN,
	payload
});
