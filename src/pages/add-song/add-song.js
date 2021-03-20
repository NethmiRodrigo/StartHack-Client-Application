import axios from "axios";
import React, { useEffect, useState } from "react";

const AddSong = (props) => {
	const [song, setsong] = useState("");
	const [file, setfile] = useState();
	const [status, setstatus] = useState();
	const [songs, setsongs] = useState();

	useEffect(() => {
		fetchSongs();
	}, []);

	const handleSubmit = async () => {
		if (song && file !== null) {
			const formData = new FormData();
			formData.append("audio", file);
			formData.append("name", song);
			let results = await axios.post("/add-song", formData);
			if (results.status === 201) {
				setstatus("uploaded");
				fetchSongs();
			}
		}
	};

	const fetchSongs = async () => {
		let results = await axios.get("/songs");
		if (results.status === 200) {
			setsongs(results.data.songs);
			console.log(songs);
		}
	};

	return (
		<div
			className="flex flex-2 flex-col lg:flex-row xl:flex-row 2xl:flex-row m-10"
			style={{ padding: "4rem" }}
		>
			<div className="flex flex-col lg:w-4/12 ">
				<p className="text-4xl text-white font-semibold tracking-wide">
					Add Music
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
						value={song}
						onChange={(e) => {
							setsong(e.target.value);
						}}
						type="text"
						placeholder="Name of the song"
					/>
				</div>
				<div className="my-4">
					<label className="block text-white tracking-normal text-lg font-bold mb-2">
						Upload audio file
					</label>
					<input
						className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="file"
						accept="audio/*"
						onChange={(e) => {
							setfile(e.target.files[0]);
							console.log(file);
						}}
					/>
				</div>
				{status === "uploaded" ? (
					<div className="my-4 bg-green-400 text-center rounded p-2 text-white font-semibold">
						<p>Song uploaded successfully</p>
					</div>
				) : (
					status && (
						<div className="my-4 bg-red-400 rounded p-2 text-center text-white font-semibold">
							<p>Failed to upload. Please try again</p>
						</div>
					)
				)}
				<div className="my-4">
					<button
						type="submit"
						onClick={handleSubmit}
						className="uppercase transition duration-500 ease-in-out hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow transform hover:-translate-y-1 hover:scale-110"
					>
						Add song
					</button>
				</div>
			</div>
			<div className="flex flex-col flex-1 m-4 justify-center items-center">
				<p className="text-3xl text-white font-semibold">All Songs</p>
				{songs?.map((element) => (
					<div className="p-1 flex flex-row lg:w-4/12 bg-gray-400 bg-opacity-25 w-full justify-center items-center m-2 rounded-lg">
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

export default AddSong;
