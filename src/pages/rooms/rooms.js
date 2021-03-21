import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../redux/actions/data_actions";

const Rooms = (props) => {
	const {
		UI: { rooms },
		history,
	} = props;
	const [roomsState, setroomsState] = useState(rooms);

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
			if (element["name"] === room) found = element;
		});
		return found;
	};

	return (
		<div className="flex flex-1 flex-col" style={{ minHeight: "100vH" }}>
			<div
				className="flex flex-1 flex-col lg:flex-row xl:flex-row 2xl:flex-row"
				style={{ padding: "4rem" }}
			>
				<div
					onClick={() => {
						if (rooms.length > 0 && !isCreated("Vehicle Handover")) {
							handlesubmit("Vehicle Handover");
						} else if (isCreated("Vehicle Handover").fcmToken) {
							history.push(`/room/${isCreated("Vehicle Handover").accessCode}`);
						}
					}}
					className="p-2 flex flex-col bg-gray-400 bg-opacity-25 lg:w-3/12 justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
				>
					<div className="flex flex-1 flex-col justify-center items-center m-2 rounded-lg p-2">
						<p className="text-base text-white">Vehicle Handover</p>

						{isCreated("Vehicle Handover") && (
							<>
								<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
									Created!
								</div>
								<div className="m-2 bg-yellow-100 p-2 rounded-full font-bold">
									Access ID: {isCreated("Vehicle Handover").accessCode}
								</div>
								{isCreated("Vehicle").fcm ? (
									<div className="m-2 bg-green-300 p-2 rounded-full font-bold">
										Online
									</div>
								) : (
									<div className="m-2p-2 bg-red-300 p-2 rounded-full font-bold">
										Offline
									</div>
								)}
							</>
						)}
					</div>
				</div>
				<div className="flex flex-col flex-1">
					<div
						onClick={() => {
							if (rooms.length > 0 && !isCreated("Main Service Area")) {
								handlesubmit("Main Service Area");
							} else if (isCreated("Main Service Area").fcmToken) {
								history.push(
									`/room/${isCreated("Main Service Area").accessCode}`
								);
							}
						}}
						className="p-2 flex flex-1 flex-col bg-gray-400 bg-opacity-25 justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<p className="text-base text-white">Main Service Area</p>

						{isCreated("Main Service Area") && (
							<>
								<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
									Created!
								</div>
								<div className="m-2 bg-yellow-100 p-2 rounded-full font-bold">
									Access ID: {isCreated("Main Service Area").accessCode}
								</div>
								{isCreated("Main Service Area").fcmToken ? (
									<div className="m-2 bg-green-300 p-2 rounded-full font-bold">
										Online
									</div>
								) : (
									<div className="m-2p-2 bg-red-300 p-2 rounded-full font-bold">
										Offline
									</div>
								)}
							</>
						)}
					</div>
					<div
						onClick={() => {
							if (rooms.length > 0 && !isCreated("Vehicle Display")) {
								handlesubmit("Vehicle Display");
							} else if (isCreated("Vehicle Display").fcmToken) {
								history.push(
									`/room/${isCreated("Vehicle Display").accessCode}`
								);
							}
						}}
						className="p-2 flex flex-1 flex-col bg-gray-400 bg-opacity-25 m-2 justify-center items-center rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<p className="text-base text-white">Vehicle Display</p>

						{isCreated("Vehicle Display") && (
							<>
								<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
									Created!
								</div>
								<div className="m-2 bg-yellow-100 p-2 rounded-full font-bold">
									Access ID: {isCreated("Vehicle Display").accessCode}
								</div>
								{isCreated("Vehicle Display").fcm ? (
									<div className="m-2 bg-green-300 p-2 rounded-full font-bold">
										Online
									</div>
								) : (
									<div className="m-2p-2 bg-red-300 p-2 rounded-full font-bold">
										Offline
									</div>
								)}
							</>
						)}
					</div>
				</div>

				<div className="flex flex-col lg:w-3/12">
					<div
						onClick={() => {
							if (rooms.length > 0 && !isCreated("Service Lobby")) {
								handlesubmit("Service Lobby");
							} else if (isCreated("Service Lobby").fcmToken) {
								history.push(`/room/${isCreated("Service Lobby").accessCode}`);
							}
						}}
						className="p-2 flex flex-1 flex-col bg-gray-400 bg-opacity-25 justify-center items-center m-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<p className="text-base text-white">Service Lobby</p>

						{isCreated("Service Lobby") && (
							<>
								<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
									Created!
								</div>
								<div className="m-2 bg-yellow-100 p-2 rounded-full font-bold">
									Access ID: {isCreated("Service Lobby").accessCode}
								</div>
								{isCreated("Service Lobby").fcm ? (
									<div className="m-2 bg-green-300 p-2 rounded-full font-bold">
										Online
									</div>
								) : (
									<div className="m-2p-2 bg-red-300 p-2 rounded-full font-bold">
										Offline
									</div>
								)}
							</>
						)}
					</div>
					<div
						onClick={() => {
							if (rooms.length > 0 && !isCreated("Service Outbound")) {
								handlesubmit("Service Outbound");
							} else if (isCreated("Service Outbound").fcmToken) {
								history.push(
									`/room/${isCreated("Service Outbound").accessCode}`
								);
							}
						}}
						className="p-2 flex flex-1 flex-col bg-gray-400 bg-opacity-25 m-2 justify-center items-center rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
					>
						<p className="text-base text-white">Service Outbound</p>

						{isCreated("Service Outbound") && (
							<>
								<div className="m-2 bg-green-400 p-2 rounded-full font-bold">
									Created!
								</div>
								<div className="m-2 bg-yellow-100 p-2 rounded-full font-bold">
									Access ID: {isCreated("Service Outbound").accessCode}
								</div>
								{isCreated("Service Outbound").fcm ? (
									<div className="m-2 bg-green-300 p-2 rounded-full font-bold">
										Online
									</div>
								) : (
									<div className="m-2p-2 bg-red-300 p-2 rounded-full font-bold">
										Offline
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

Rooms.propTypes = {
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

export default connect(mapStateToProps, mapActionsToProps)(Rooms);
