import { SET_USER } from "../types";

import { LOADING, SET_ERRORS } from "../types";

const initialState = {
	song: "",
	loading: false,
	errors: {},
};

export default function (state = initialState, action) {
	switch (action) {
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case SET_ERRORS:
			return {
				...state,
				errors: action.payload,
			};
		default:
			return state;
	}
}
