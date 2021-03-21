import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { login } from "../../redux/actions/data_actions";

const Login = (props) => {
	const [dealership, setdealership] = useState("");
	const [password, setpassword] = useState("");
	const [errors, seterrors] = useState();

	useEffect(() => {
		props.UI.errors && seterrors(props.UI.errors.error);
	}, [props.UI.errors]);

	const handlesubmit = (event) => {
		event.preventDefault();
		let errorObj = {};
		if (dealership === "") errorObj.dealership = "invalid";
		if (password === "") errorObj.password = "invalid";
		if (Object.keys(errorObj).length === 0) {
			props.login(dealership, password, props.history);
		} else seterrors(errorObj);
	};
	return (
		<div className="flex flex-1 flex-col">
			<div
				className="flex flex-1 flex-col lg:flex-row xl:flex-row 2xl:flex-row"
				style={{ padding: "4rem" }}
			>
				<div className="flex flex-col flex-1 justify-center items-center">
					<div className="flex flex-1 flex-col lg:w-4/12 bg-gray-400 bg-opacity-25 m-2 rounded-lg p-1 pb-28 text-center">
						<form
							onSubmit={handlesubmit}
							className="justify-center items-center"
						>
							<div className="flex justify-center items-center">
								<img
									className="bg-gray m-2 rounded-full p-2"
									src="https://cdn0.iconfinder.com/data/icons/cars-22/512/Mersedes-512.png"
									alt="car"
									width={180}
									height={180}
								/>
							</div>
							<div className="mx-12 mb-4 text-left">
								<label
									className="block text-white tracking-normal text-md font-bold mb-2"
									for="dealership"
								>
									Username
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="dealership"
									value={dealership}
									onChange={(e) => {
										setdealership(e.target.value);
										seterrors({});
									}}
									type="text"
									placeholder="Username"
								/>
								{errors?.dealership && (
									<p className="text-red-500 text-sm italic">
										Please enter your username
									</p>
								)}
							</div>
							<div className="mx-12 mb-4 text-left">
								<label
									className="block text-white tracking-normal text-md font-bold mb-2"
									for="password"
								>
									Password
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									value={password}
									onChange={(e) => {
										setpassword(e.target.value);
										seterrors({});
									}}
									type="password"
									placeholder="Password"
								/>
								{errors?.password && (
									<p className="text-red-500 text-sm italic">
										Please enter a valid password
									</p>
								)}
							</div>
							{/* {errors && (
							<p className="text-red-500 text-sm italic">{props.UI.errors}</p>
						)} */}
							<button
								type="submit"
								className="mx-8 w-4/12 mt-8 transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	data: state.data,
	UI: state.UI,
});

const mapActionsToProps = {
	login,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
