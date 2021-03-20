import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { logoutUser } from "../../redux/actions/data_actions";

const Navigation = (props) => {
	const user = props.data.authenticated;
	return (
		<div className="flex flex-row justify-between items-center p-8">
			<div className="text-white mr-3">
				<Link to="/">
					<img src={logo} alt="" width={70} height={60} />
				</Link>
			</div>
			<div className="text-white flex flex-row uppercase text-base">
				{user ? (
					<>
						<div className="p-2">
							<button className="uppercase transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110">
								Add Song
							</button>
						</div>
						<div className="p-2">
							<button className="uppercase transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110">
								Add Playlist
							</button>
						</div>
					</>
				) : (
					""
				)}
				<div className="p-2">
					<Link to="/register">
						<button className="uppercase transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110">
							Areas
						</button>
					</Link>
				</div>
				<div className="p-2">
					{user ? (
						<button
							onClick={() => props.logoutUser()}
							className="uppercase transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110"
						>
							Logout
						</button>
					) : (
						<Link to="/login">
							<button className="uppercase transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110">
								Login
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

Navigation.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	data: state.data,
});

const mapActionsToProps = {
	logoutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Navigation);
