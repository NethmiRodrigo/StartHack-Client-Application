import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navigation from "../../components/navbar/navbar";
import { register } from "../../redux/actions/data_actions";

const Register = (props) => {
	const {
		UI: { loading, created, rooms },
	} = props;
	const [room_name, setroomname] = useState("");
	const [roomsState, setroomsState] = useState(rooms);
	const [errors, seterrors] = useState({});

	useEffect(() => {
		props.UI.errors && seterrors(props.UI.errors.error);
	}, [props.UI.errors]);

	useEffect(() => {
		props.UI.rooms && setroomsState(props.UI.rooms);
	}, [props.UI.rooms]);

	const handlesubmit = (room_name) => {
		let room = { name: room_name };
		props.register(room);
	};

	const isCreated = (room) => {
		let found = false;
		let allrooms = [];
		if (rooms.length > 0) allrooms = [...roomsState];
		allrooms.forEach((element) => {
			if (element["name"] === room) found = true;
		});
		return found;
	};

	return (
		<div className="flex flex-1 flex-col img-bg" style={{ minHeight: "100vH" }}>
			<Navigation />
			<div
				className="flex flex-1 flex-col lg:flex-row xl:flex-row 2xl:flex-row"
				style={{ padding: "4rem" }}
			>
				<div
					onClick={() => {
						if (rooms.length > 0 && !isCreated("Vehicle Handover")) {
							handlesubmit("Vehicle Handover");
						}
					}}
					className="p-2 flex flex-col bg-gray-400 bg-opacity-25 lg:w-3/12 justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
				>
					<div className="flex flex-1 flex-col justify-center items-center m-2 rounded-lg p-2">
						<p className="text-base text-white">Vehicle Handover</p>

						{isCreated("Vehicle Handover") && (
							<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
								Created!
							</div>
						)}
					</div>
				</div>
				<div className="flex flex-col flex-1">
					<div
						onClick={() => {
							if (rooms.length > 0 && !rooms.includes("Main Service Area")) {
								handlesubmit("Main Service Area");
							}
						}}
						className="p-2 flex flex-1 flex-col bg-gray-400 bg-opacity-25 justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<p className="text-base text-white">Main Service Area</p>

						{isCreated("Main Service Area") && (
							<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
								Created!
							</div>
						)}
					</div>
					<div
						onClick={() => {
							if (rooms.length > 0 && !rooms.includes("Vehicle Display")) {
								handlesubmit("Vehicle Display");
							}
						}}
						className="p-2 flex flex-1 flex-col bg-gray-400 bg-opacity-25 m-2 justify-center items-center rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<p className="text-base text-white">Vehicle Display</p>

						{isCreated("Vehicle Display") && (
							<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
								Created!
							</div>
						)}
					</div>
				</div>

				<div className="flex flex-col lg:w-3/12">
					<div
						onClick={() => {
							if (rooms.length > 0 && !rooms.includes("Service Lobby")) {
								handlesubmit("Service Lobby");
							}
						}}
						className="p-2 flex flex-1 flex-col bg-gray-400 bg-opacity-25 justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<p className="text-base text-white">Service Lobby</p>

						{isCreated("Service Lobby") && (
							<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
								Created!
							</div>
						)}
					</div>
					<div
						onClick={() => {
							if (rooms.length > 0 && !rooms.includes("Service Outbound")) {
								handlesubmit("Service Outbound");
							}
						}}
						className="p-2 flex flex-1 flex-col bg-gray-400 bg-opacity-25 m-2 justify-center items-center rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<p className="text-base text-white">Service Outbound</p>

						{isCreated("Service Outbound") && (
							<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
								Created!
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

Register.propTypes = {
	register: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	data: state.data,
	UI: state.UI,
});

const mapActionsToProps = {
	register,
};

export default connect(mapStateToProps, mapActionsToProps)(Register);
