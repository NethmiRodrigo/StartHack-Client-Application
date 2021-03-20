import axios from "axios";
import { LOADING, SET_ERRORS, SET_ROOMS } from "../types";

export const getAllRooms = () => async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		let results = await axios.get("/dealership-rooms");
		dispatch({ type: SET_ROOMS, payload: results.data.rooms });
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERRORS, payload: error });
	}
};
