import { CLEAR_ERRORS, SET_USER } from "../types";

import {
	LOADING,
	SET_ERRORS,
	SET_CREATED_MESSAGE,
	SET_ROOMS,
	SET_SONGS,
	SET_PLAYLISTS,
} from "../types";

const initialState = {
	rooms: [],
	loading: false,
	created: false,
	errors: {},
	songs: [],
	playlists: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				created: false,
				errors: {},
				loading: true,
			};
		case SET_ERRORS:
			return {
				...state,
				errors: action.payload,
			};
		case SET_CREATED_MESSAGE:
			let allrooms = [...state.rooms];
			allrooms.push(action.payload);
			return {
				...state,
				rooms: allrooms,
				loading: false,
				created: true,
			};
		case SET_ROOMS:
			return {
				...state,
				loading: false,
				rooms: action.payload,
			};

		case SET_SONGS:
			return {
				...state,
				songs: action.payload,
				loading: false,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				errors: {},
				loading: false,
			};
		case SET_PLAYLISTS:
			return {
				...state,
				playlists: action.payload,
				loading: false,
			};
		default:
			return state;
	}
}
