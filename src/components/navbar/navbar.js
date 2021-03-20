import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navigation = () => {
	return (
		<div className="flex flex-row justify-between items-center p-8">
			<div className="text-white mr-3">
				<Link to="/">
					<img src={logo} alt="" width={70} height={60} />
				</Link>
			</div>
			<div className="text-white flex flex-row uppercase text-base">
				<div className="p-2">
					<button class="transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110">
						Login
					</button>
				</div>
				<div className="p-2">
					<button class="transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110">
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
