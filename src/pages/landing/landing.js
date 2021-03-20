import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navbar/navbar";

const Landing = () => {
	const about = React.createRef();
	return (
		<div className="flex flex-1 flex-col img-bg" style={{ minHeight: "100vH" }}>
			<Navigation />
			<div className="my-32 py-48 text-white flex flex-1 flex-col justify-center items-center pb-4 ">
				<p className="text-7xl tracking-normal font-bold">MERCEDES</p>
				<p className="text-lg">Audio Control Application</p>
				<div className="bg-white p-3 m-2 transition duration-300 ease-in-out transform hover:translate-y-4 hover:bg-gray-400 cursor-pointer rounded-full flex justify-center items-center">
					<Link
						onClick={() => {
							about.current.scrollIntoView({ behavior: "smooth" });
						}}
					>
						<img
							alt=""
							src="https://cdn3.iconfinder.com/data/icons/lightly-2-interface/24/double-chevron-down-512.png"
							width={50}
							height={50}
						/>
					</Link>
				</div>
			</div>
			<div
				className="mt-32 pt-32 flex flex-col justify-center items-center pb-4 m-4"
				ref={about}
			>
				<p className="text-4xl font-semibold text-white uppercase">
					About the app
				</p>
				<div className="text-base text-white tracking-tighter justify-center m-10 mx-10 text-center">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
