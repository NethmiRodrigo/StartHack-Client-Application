import axios from "axios";
import {
	LOADING,
	SET_AUTHENTICATED,
	SET_ERRORS,
	CLEAR_ERRORS,
	SET_UNAUTHENTICATED,
	SET_CREATED_MESSAGE,
	SET_SONGS,
	SET_PLAYLISTS,
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

export const getSongs = () => async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		let results = await axios.get("/songs");
		dispatch({
			type: SET_SONGS,
			payload: results.data.songs,
		});
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};

export const getPlaylists = () => async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		let results = await axios.get("/playlists");
		dispatch({
			type: SET_PLAYLISTS,
			payload: results.data.playlists,
		});
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};

export const addSong = (formData) => async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		let results = await axios.post("/add-song", formData);
		dispatch({
			type: CLEAR_ERRORS,
		});
		return results;
	} catch (error) {
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};

export const addPlaylist = (playlist) => async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		let results = await axios.post("/create-playlist", playlist);
		dispatch({
			type: CLEAR_ERRORS,
		});
		return results;
	} catch (error) {
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};

export const addSongsToPlaylist = (playlist_id, songs) => async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		let results = await axios.post(`/playlist-add/${playlist_id}`, { songs });
		dispatch({
			type: CLEAR_ERRORS,
		});
		return results;
	} catch (error) {
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};

export const playPlaylist = (roomId, playlistId) => async (dispatch) => {
	try {
		let results = await axios.post("/play-playlist", { roomId, playlistId });

		return results;
	} catch (error) {
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};

//Volume in between 0 and 1
export const changeVolume = (roomId, volume) => async (dispatch) => {
	try {
		let results = await axios.post("/change-volume", {
			roomId,
			volume: volume.toString(),
		});
		return results;
	} catch (error) {
		dispatch({ type: SET_ERRORS, payload: error.response?.data });
	}
};
