import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navigation from "../../components/navbar/navbar";
import { register } from "../../redux/actions/data_actions";

const Register = (props) => {
	const {
		UI: { loading },
	} = props;
	const [dealership, setdealership] = useState("");
	const [username, setusername] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");
	const [password, setpassword] = useState("");
	const [errors, seterrors] = useState({});

	const handlesubmit = () => {
		console.log("Clicked");
		let errorObj = {};
		if (dealership === "") errorObj.dealership = "invalid";
		if (password === "") errorObj.password = "invalid";
		if (username === "") errorObj.username = "invalid";
		if (confirmPassword === "") errorObj.confirmPassword = "invalid";
		if (password !== confirmPassword) errorObj.confirmPassword = "invalid";
		if (Object.keys(errorObj).length === 0) {
			let user = {
				user: {
					name: username,
				},
			};
			props.register();
		} else seterrors(errorObj);
	};
	return (
		<div className="flex flex-1 flex-col img-bg" style={{ minHeight: "100vH" }}>
			<Navigation />
			<div
				className="flex flex-1 flex-col lg:flex-row xl:flex-row 2xl:flex-row"
				style={{ padding: "4rem" }}
			>
				<div className="flex flex-col flex-1 justify-center items-center">
					<div className="flex flex-1 flex-col lg:w-8/12 bg-gray-400 bg-opacity-25 m-2 rounded-lg p-5">
						<div className="flex justify-center items-center">
							<img
								className="bg-gray m-2 rounded-full p-2"
								src="https://cdn0.iconfinder.com/data/icons/cars-22/512/Mersedes-512.png"
								alt="car"
								width={180}
								height={180}
							/>
						</div>
						<div className="mx-48 mb-4">
							<label
								className="block text-white tracking-normal text-md font-bold mb-2"
								for="dealership"
							>
								Dealership ID
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
								placeholder="ID"
							/>
							{errors?.dealership && (
								<p className="text-red-500 text-sm italic">
									Please enter the dealership ID
								</p>
							)}
						</div>
						<div className="mx-48 mb-4">
							<label
								className="block text-white tracking-normal text-md font-bold mb-2"
								for="dealership"
							>
								User Account Name
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="dealership"
								value={username}
								onChange={(e) => {
									setusername(e.target.value);
									seterrors({});
								}}
								type="text"
								placeholder="ID"
							/>
							{errors?.username && (
								<p className="text-red-500 text-sm italic">
									Please enter a name
								</p>
							)}
						</div>
						<div className="mx-48 mb-4">
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
						<div className="mx-48 mb-4">
							<label
								className="block text-white tracking-normal text-md font-bold mb-2"
								for="password"
							>
								Confirm Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								value={confirmPassword}
								onChange={(e) => {
									setconfirmPassword(e.target.value);
									seterrors({});
								}}
								type="password"
								placeholder="Confirm Password"
							/>
							{errors?.confirmPassword && (
								<p className="text-red-500 text-sm italic">
									Passwords have to be same
								</p>
							)}
						</div>
						<button
							type="submit"
							onClick={() => {
								handlesubmit();
							}}
							className="mx-48 transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110"
						>
							Login
						</button>
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
