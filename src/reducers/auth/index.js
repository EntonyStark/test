import * as types from "../../constants/actionTypes";

import initialState from "../../store/initialState";

export default (state = initialState.auth, { type, payload }) => {
	switch (type) {
		case types.AUTH_REQUEST: {
			return { ...state, isFetching: true };
		}
		case types.AUTH_REQUEST_SUCCESS: {
			const { token } = payload;

			return { ...state, isFetching: false, data: token };
		}
		case types.AUTH_REQUEST_FAIL: {
			return { ...state, isFetching: false };
		}

		case types.SET_TOKEN: {
			return { ...state, data: payload };
		}

		default:
			return state;
	}
};
