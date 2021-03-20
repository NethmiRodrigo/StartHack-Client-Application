import axios from "axios";
import {
	LOADING,
	SET_AUTHENTICATED,
	SET_ERRORS,
	CLEAR_ERRORS,
	SET_UNAUTHENTICATED,
	SET_CREATED_MESSAGE,
} from "../types";
import { getAllRooms } from "./ui_actions";

export const login = (username, password, history) => async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		let user = {
			username,
			password,
		};
		let results = await axios.post("/admin-login", user);
		setAuthorizationHeader(results.data.token);
		dispatch({
			type: SET_AUTHENTICATED,
			payload: results.data,
		});
		dispatch(getAllRooms());
		dispatch({ type: CLEAR_ERRORS });
		history.push("/");
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};

export const register = (room) => async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		let results = await axios.post("/room-create", room);
		dispatch({
			type: SET_CREATED_MESSAGE,
			payload: results.data.room,
		});
		console.log(results);
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("MercToken");
	delete axios.defaults.headers.common["Authorization"];
	dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = (token) => {
	const merc_token = `Bearer ${token}`;
	localStorage.setItem("MercToken", merc_token);
	axios.defaults.headers.common["Authorization"] = merc_token;
};
