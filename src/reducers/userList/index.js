import * as types from "../../constants/actionTypes";

import initialState from "../../store/initialState";

export default (state = initialState.userList, { type, payload }) => {
	switch (type) {
		case types.GET_USER_LIST: {
			return { ...state, isFetching: true };
		}
		case types.GET_USER_LIST_SUCCESS: {
			const { total, data } = payload;

			return { ...state, isFetching: false, list: data, total };
		}
		case types.GET_USER_LIST_FAIL: {
			return { ...state, isFetching: false };
		}

		default:
			return state;
	}
};
