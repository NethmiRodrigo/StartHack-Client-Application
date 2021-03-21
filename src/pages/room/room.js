import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
	getPlaylists,
	playPlaylist,
	changeVolume,
} from "../../redux/actions/data_actions";

const Room = (props) => {
	const { rooms, playlists } = props;
	const roomid = props.match.params.roomid;
	const room = rooms.filter((element) => element.accessCode === roomid)[0];
	const [selected, setselected] = useState();
	const [volume, setvolume] = useState(50);

	useEffect(() => {
		props.getPlaylists();
	}, []);

	const play = (playlist) => {
		props.playPlaylist(roomid, playlist._id);
		setselected(playlist);
	};

	const changeVolume = (value) => {
		props.changeVolume(roomid, value / 10);
	};

	return (
		<>
			<div
				className="flex flex-2 flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center"
				style={{ padding: "4rem" }}
			>
				<div className="flex flex-col lg:w-4/12 items-center">
					{playlists?.map((playlist) => (
						<div
							onClick={() => play(playlist)}
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
							<p className="text-base text-white"> {playlist.name} </p>
						</div>
					))}
				</div>
				<div className="flex flex-col flex-1 justify-center items-center bg-black rounded mx-10 my-10 p-10">
					<h2 className="text-white font-bold text-3xl tracking-wide text-center">
						{room?.name}
					</h2>
					<p className="text-white tracking-widest font-semibold text-left">
						{room?.accessCode}
					</p>
					<div className="mt-2 p-10 justufy-center items-center">
						<p className="text-lg text-white font-bold text-center">
							Now playing:
						</p>
						<div className="bg-white bg-opcaity-30 p-5 mt-5 rounded-full w-full m-5 justify-center items-center">
							{selected ? (
								<div className="flex flex-1 flex-col justify-center items-center">
									<div className="flex flex-1 flex-row items-center justify-center">
										<p className="text-base text-black text-center justify-items-center w-full">
											Playlist: {selected.name}
										</p>
									</div>
									<div className="flex flex-1 flex-row mt-2">
										<div className="rounded-full flex justify-center items-center mx-1">
											<img
												alt=""
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsTcuyBNansTA30-GgEVwkURAPEXnLtlm4A&usqp=CAU"
												width={50}
												height={50}
											/>
										</div>
										<div className="slidecontainer">
											<input
												type="range"
												min="0"
												max="100"
												value={volume}
												onInput={(e) => {
													setvolume(e.target.value);
												}}
												onMouseUp={(e) => {
													changeVolume(e.target.value);
												}}
												class="slider"
												id="myRange"
											/>
										</div>
									</div>
								</div>
							) : (
								<p className="text-base text-black text-center justify-items-center w-full">
									Select a playlist to play
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	rooms: state.UI.rooms,
	playlists: state.UI.playlists,
});

const mapActionsToProps = {
	getPlaylists,
	playPlaylist,
	changeVolume,
};

Room.propTypes = {
	rooms: PropTypes.array.isRequired,
	playlists: PropTypes.object.isRequired,
	getPlaylists: PropTypes.func.isRequired,
	playPlaylist: PropTypes.func.isRequired,
	changeVolume: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Room);
