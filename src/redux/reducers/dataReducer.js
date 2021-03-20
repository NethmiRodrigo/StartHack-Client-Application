import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";

const initialState = {
	playlist: [],
	errors: null,
	authenticated: false,
	loading: false,
	user: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_AUTHENTICATED: {
			return {
				...state,
				authenticated: true,
				loading: false,
			};
		}
		case SET_UNAUTHENTICATED: {
			return {
				...state,
				authenticated: false,
				loading: false,
				user: {},
			};
		}

		default:
			return state;
	}
}
