import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

const Room = (props) => {
	const { rooms } = props;
	const roomid = props.match.params.roomid;
	const playlist = [];
	const room = rooms.filter((element) => element.accessCode === roomid)[0];
	useEffect(async () => {
		let results = await axios.get("/playlists");
		console.log(results.data);
	}, []);
	return (
		<>
			<div
				className="flex flex-2 flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center"
				style={{ padding: "4rem" }}
			>
				<div className="flex flex-col lg:w-4/12 items-center">
					<div className="p-1 flex flex-row bg-gray-400 bg-opacity-25 w-full justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer">
						<div className="rounded-full flex justify-center items-center mx-1">
							<img
								alt=""
								src="http://simpleicon.com/wp-content/uploads/play1.png"
								width={50}
								height={50}
							/>
						</div>
						<p className="text-base text-white">Playlist 1</p>
					</div>
					<div className="p-1 flex flex-row bg-gray-400 bg-opacity-25 w-full justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer">
						<div className="rounded-full flex justify-center items-center mx-1">
							<img
								alt=""
								src="http://simpleicon.com/wp-content/uploads/play1.png"
								width={50}
								height={50}
							/>
						</div>
						<p className="text-base text-white">Playlist 2</p>
					</div>
					<div className="p-1 flex flex-row bg-gray-400 bg-opacity-25 w-full justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer">
						<div className="rounded-full flex justify-center items-center mx-1">
							<img
								alt=""
								src="http://simpleicon.com/wp-content/uploads/play1.png"
								width={50}
								height={50}
							/>
						</div>
						<p className="text-base text-white">Playlist 3</p>
					</div>
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
						<div className="bg-white bg-opcaity-30 p-5 mt-2 rounded-full">
							<p className="text-base text-black"> Frank Sinatra - Bleh</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	rooms: state.UI.rooms,
});

Room.proptTypes = {
	rooms: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Room);
