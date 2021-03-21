import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	addPlaylist,
	getPlaylists,
	addSongsToPlaylist,
} from "../../redux/actions/data_actions";
import { connect } from "react-redux";

const AddPlaylist = (props) => {
	const { playlists } = props;
	const [songs, setsongs] = useState();
	const [playlist, setplaylist] = useState("");
	const [editing, setediting] = useState();
	const [pending, setpending] = useState([]);

	useEffect(() => {
		fetchSongs();
		props.getPlaylists();
	}, []);

	const fetchSongs = async () => {
		let results = await axios.get("/songs");
		if (results.status === 200) {
			setsongs(results.data.songs);
		}
	};

	const handleSubmit = () => {
		if (playlist !== null) {
			let request = { name: playlist };
			props.addPlaylist(request);
			props.getPlaylists();
		}
	};

	const addSong = (song) => {
		let allSongs = pending.length > 0 ? [...pending] : [];
		allSongs.push(song);
		setpending(allSongs);
	};

	const onConfirm = () => {
		if (pending.length > 0) {
			let songs = [];
			pending.forEach((song) => songs.push(song._id));
			props.addSongsToPlaylist(editing._id, songs);
			setediting("");
			setpending([]);
			props.getPlaylists();
		}
	};

	const onCancel = () => {
		setpending([]);
		setediting("");
	};

	return (
		<div
			className="flex flex-2 flex-col lg:flex-row xl:flex-row 2xl:flex-row m-10"
			style={{ padding: "4rem" }}
		>
			<div className="flex flex-1 flex-col">
				<div className="flex flex-col lg:w-6/12 ">
					<div className="flex flex-1 flex-col w-full bg-gray-300 bg-opacity-30 mx-30 p-4 m-2">
						<p className="text-2xl text-white p-2 m-5 rounded font-semibold">
							Currently editing
						</p>
						<p className="text-xl text-white p-2 my-1 mx-5 rounded font-semibold">
							{editing?.name}
						</p>
						<div className="flex flex-1 flex-row justify-center items-center">
							<button
								onClick={() => onConfirm()}
								className="uppercase hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
							>
								Confirm
							</button>
							<button
								onClick={() => onCancel()}
								className="uppercase hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
							>
								Close
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-1 flex-col lg:w-6/12 bg-gray-300 bg-opacity-30 mx-30 p-4 m-2">
					<p className="text-2xl text-white p-2 m-5 rounded font-semibold">
						Create new playlist
					</p>
					<div className="my-4">
						<label
							className="block text-white tracking-normal text-lg font-bold mb-2"
							for="dealership"
						>
							Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="dealership"
							value={playlist}
							onChange={(e) => {
								setplaylist(e.target.value);
							}}
							type="text"
							placeholder="Name of the playlist"
						/>
					</div>
					<div className="my-4">
						<button
							type="submit"
							onClick={() => {
								handleSubmit();
								setplaylist("");
							}}
							className="uppercase transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110"
						>
							Add playlist
						</button>
					</div>
				</div>
			</div>

			<div className="flex flex-col lg:w-4/12 ">
				{editing && (
					<div className="bg-black my-3 rounded">
						<p className="text-3xl text-white p-2 m-5 rounded font-semibold">
							Songs in "{editing.name}"
						</p>
						{editing.songs.length === 0 && pending.length === 0 ? (
							<p className="text-xl text-white p-2 m-5 rounded font-semibold">
								It's so empty in here :/ Click on the songs to add them to your
								playlist
							</p>
						) : editing && pending.length > 0 ? (
							<div className="flex flex-1 flex-col justify-center items-center">
								{pending.map((song) => (
									<div className="p-1 flex flex-row lg:w-4/12 bg-gray-400 bg-opacity-25 w-full items-center m-2 rounded-lg cursor-pointer">
										<div className="rounded-full flex justify-center items-center mx-1">
											<img
												alt=""
												src="http://simpleicon.com/wp-content/uploads/play1.png"
												width={50}
												height={50}
											/>
										</div>
										<p className="text-base text-white uppercase font-semibold">
											{song.name}
										</p>
									</div>
								))}
							</div>
						) : (
							<div className="flex flex-1 flex-col justify-center items-center">
								{editing.songs.map((song) => (
									<div className="p-1 flex flex-row lg:w-4/12 bg-gray-400 bg-opacity-25 w-full items-center m-2 rounded-lg cursor-pointer">
										<div className="rounded-full flex justify-center items-center mx-1">
											<img
												alt=""
												src="http://simpleicon.com/wp-content/uploads/play1.png"
												width={50}
												height={50}
											/>
										</div>
										<p className="text-base text-white uppercase font-semibold">
											{song.name}
										</p>
									</div>
								))}
							</div>
						)}
					</div>
				)}
				<p className="text-4xl text-white font-semibold tracking-wide">
					All Playlists
				</p>
				{playlists.map((element) => (
					<div
						onClick={() => setediting(element)}
						className="p-1 flex flex-row bg-gray-400 bg-opacity-25 w-full justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<div className="rounded-full flex justify-center items-center mx-1">
							<img
								alt=""
								src="http://simpleicon.com/wp-content/uploads/play1.png"
								width={50}
								height={50}
							/>
						</div>
						<p className="text-base text-white">{element.name}</p>
					</div>
				))}
			</div>
			<div className="flex flex-col flex-1 mx-4 items-center">
				<p className="text-3xl text-white font-semibold mt-5">All Songs</p>
				{songs?.map((element) => (
					<div
						onClick={() => {
							if (editing) addSong(element);
						}}
						className="p-1 flex flex-row lg:w-4/12 bg-gray-400 bg-opacity-25 w-full items-center m-2 rounded-lg cursor-pointer"
					>
						<div className="rounded-full flex justify-center items-center mx-1">
							<img
								alt=""
								src="http://simpleicon.com/wp-content/uploads/play1.png"
								width={50}
								height={50}
							/>
						</div>
						<p className="text-base text-white uppercase font-semibold">
							{" "}
							{element.name}{" "}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

AddPlaylist.propTypes = {
	playlists: PropTypes.array.isRequired,
	addPlaylist: PropTypes.func.isRequired,
	getPlaylists: PropTypes.func.isRequired,
	addSongsToPlaylist: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	playlists: state.UI.playlists,
});

const mapActionsToProps = {
	addPlaylist,
	getPlaylists,
	addSongsToPlaylist,
};

export default connect(mapStateToProps, mapActionsToProps)(AddPlaylist);
