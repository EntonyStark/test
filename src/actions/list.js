import * as types from "../constants/actionTypes";

export const getUserList = payload => ({
	type: types.GET_USER_LIST,
	payload
});

export const getUserListSuccess = payload => ({
	type: types.GET_USER_LIST_SUCCESS,
	payload
});

export const getUserListFail = payload => ({
	type: types.GET_USER_LIST_FAIL,
	payload
});
