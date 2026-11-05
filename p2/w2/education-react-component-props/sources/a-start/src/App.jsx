import { Fragment, useState } from "react";

function App() {
	// Since this data won't be changed, we won't use useState
	const topAnimes = [
		{
			title: "Steins;Gate",
			imageUrl: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
			totalEpisodes: 24,
			status: "Finished Airing",
		},
		{
			title: "Gintama°",
			imageUrl: "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
			totalEpisodes: 51,
			status: "Finished Airing",
		},
		{
			title: "Shingeki no Kyojin Season 3 Part 2",
			imageUrl: "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
			totalEpisodes: 10,
			status: "Finished Airing",
		},
	];

	const [showOrHideComponentName, setShowOrHideComponentName] = useState(false);
	const [whichContent, setWhichContent] = useState("home");
	const [stateData, setStateData] = useState("");
	const [formInputData, setFormInputData] = useState("");

	const formSubmissionOnClickHandler = (e) => {
		e.preventDefault();
		setStateData(formInputData);
	};

	return (
		<>
			<div className="p-2 flex flex-col gap-2 text-slate-700 min-h-screen">
				{/* <!-- NavBar --> */}
				<section
					className={`${showOrHideComponentName ? "border-2 border-slate-200" : ""} p-2 flex-none`}
				>
					<h1 className={`${showOrHideComponentName ? "" : "hidden"} text-lg`}>
						Component NavBar
					</h1>

					<nav className="flex gap-2 justify-between bg-gray-200 py-4 px-4 rounded-xl">
						<div className="my-auto">Brand Logo</div>

						<div className="flex gap-2">
							{/* biome-ignore lint/a11y/useValidAnchor: This is for educational purpose */}
							<a
								href="#"
								className="my-auto relative hover:text-blue-600 after:bg-blue-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
								onClick={(e) => {
									e.preventDefault();
									setWhichContent("home");
								}}
							>
								Home
							</a>
							{/* biome-ignore lint/a11y/useValidAnchor: This is for educational purpose */}
							<a
								href="#"
								className="my-auto relative hover:text-blue-600 after:bg-blue-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
								onClick={(e) => {
									e.preventDefault();
									setWhichContent("animes");
								}}
							>
								Animes
							</a>
							{/* biome-ignore lint/a11y/useValidAnchor: This is for educational purpose */}
							<a
								href="#"
								className="my-auto relative hover:text-blue-600 after:bg-blue-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
								onClick={(e) => {
									e.preventDefault();
									setWhichContent("contactMe");
								}}
							>
								Contact Me
							</a>
						</div>

						<div className="flex gap-2">
							<div>
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									className="text-slate-600"
								>
									<title>Icon for navigation</title>
									<path
										fill="currentColor"
										d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
									/>
								</svg>
							</div>

							<div>
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									className="text-slate-600"
								>
									<title>Icon for navigation</title>
									<path
										fill="currentColor"
										d="m17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4l-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
									/>
								</svg>
							</div>
						</div>
					</nav>
				</section>

				{/* <!-- Content --> */}
				<section
					className={`${showOrHideComponentName ? "border-2 border-red-100" : ""} p-2 grow min-h-full flex flex-col`}
				>
					<h1
						className={`${showOrHideComponentName ? "" : "hidden"} text-lg flex-none`}
					>
						Component Content
					</h1>

					{/* <!-- Content Home --> */}
					{whichContent === "home" && (
						<div className="p-2 bg-gray-200 rounded-xl flex gap-2 flex-col grow">
							<h3 className="text-base">Ini adalah bagian konten (Home)</h3>
							<div className="flex items-center justify-center grow">
								<p className="text-xl text-zinc-600 animate-pulse">
									~ Isi adalah kosong, kosong adalah isi ~
								</p>
							</div>
						</div>
					)}

					{/* <!-- Content Animes --> */}
					{whichContent === "animes" && (
						<div className="p-2 bg-gray-200 rounded-xl flex gap-2 flex-col grow">
							<h3 className="text-base flex-none">
								Ini adalah bagian konten (Animes)
							</h3>

							<section className="p-2 grow flex flex-col justify-center w-128 mx-auto">
								<h1
									className={`${showOrHideComponentName ? "" : "hidden"} text-lg text-left`}
								>
									Component Table Animes
								</h1>

								{/* <!-- Table Animes --> */}
								<table
									className={`${showOrHideComponentName ? "border border-sky-300" : ""} mx-auto table-auto border-spacing-2 border-separate`}
								>
									<thead>
										<tr>
											<th>#</th>
											<th>Thumbnail</th>
											<th>Title</th>
											<th>Episodes</th>
											<th>Status Airing</th>
										</tr>
									</thead>
									<tbody>
										{topAnimes.map((anime, idx) => (
											<Fragment key={`anime-${idx + 1}`}>
												<tr className={showOrHideComponentName ? "" : "hidden"}>
													<td colSpan="5" className="text-lg">
														<p>Component Table Animes Row</p>
													</td>
												</tr>
												<tr
													className={`${showOrHideComponentName ? "rounded-lg shadow-md hover:shadow-lg" : ""}`}
												>
													<td className="p-2">{idx + 1}</td>
													<td className="p-2">
														<img
															src={anime.imageUrl}
															className="w-16 h-24"
															alt="Anime Thumbnail"
														/>
													</td>
													<td className="p-2">{anime.title}</td>
													<td className="p-2">{anime.totalEpisodes}</td>
													<td className="p-2">{anime.status}</td>
												</tr>
											</Fragment>
										))}
									</tbody>
								</table>
							</section>
						</div>
					)}

					{/* <!-- Content Contact --> */}
					{whichContent === "contactMe" && (
						<div className="p-2 bg-gray-200 rounded-xl flex gap-2 flex-col grow">
							<h3 className="text-base">
								Ini adalah bagian konten (Contact Me)
							</h3>

							<div className="flex flex-col items-center justify-center grow w-128 mx-auto gap-2">
								{/* <!-- Form Input --> */}
								<section
									className={`${showOrHideComponentName ? "border-2 border-red-400" : ""} p-2 w-full`}
								>
									<h1
										className={`${showOrHideComponentName ? "" : "hidden"} text-lg`}
									>
										Component Form Input
									</h1>

									<form
										className="my-2 flex flex-col gap-2"
										onSubmit={formSubmissionOnClickHandler}
									>
										<input
											type="text"
											className="py-4 px-2 rounded-xl bg-gray-300"
											placeholder="Inputan dari Form"
											value={formInputData}
											onChange={(e) => {
												setFormInputData(e.target.value);
											}}
										/>
										<button
											type="submit"
											className="bg-blue-200 hover:bg-blue-400 hover:text-white mx-auto mt-4 p-2 rounded-full w-96 transition-all duration-300"
										>
											Kirimin Yuk !
										</button>
									</form>
								</section>

								{/* <!-- Form Result --> */}
								<section
									className={`${showOrHideComponentName ? "border-2 border-red-400" : ""} p-2 w-full`}
								>
									<h1
										className={`${showOrHideComponentName ? "" : "hidden"} text-lg`}
									>
										Component Form Result
									</h1>

									<div className="p-2 my-2 bg-green-200 rounded-xl">
										<p>Tulisan dari Form adalah:</p>
										<p className="text-center font-semibold">
											{stateData ? stateData : "Empty Placeholder"}
										</p>
									</div>
								</section>
							</div>
						</div>
					)}
				</section>

				{/* <!-- Footer --> */}
				<section
					className={`${showOrHideComponentName ? "border-2 border-green-200" : ""} p-2 flex-none`}
				>
					<h1 className={`${showOrHideComponentName ? "" : "hidden"} text-lg`}>
						Component Footer
					</h1>

					<div className="p-2 bg-gray-200 rounded-xl">
						<h3 className="text-base text-center">
							&copy;&nbsp;withered-flowers - 2023
						</h3>
					</div>
				</section>

				{/* <!-- Toggle Button --> */}
				<section className="mx-auto mt-4 flex-none">
					<button
						type="button"
						className={`${
							showOrHideComponentName
								? "bg-blue-200 hover:bg-blue-400 hover:text-white"
								: "bg-red-200 hover:bg-red-400 hover:text-white"
						} p-2 rounded-full w-96 transition-all duration-300`}
						onClick={() => {
							setShowOrHideComponentName(!showOrHideComponentName);
						}}
					>
						{!showOrHideComponentName ? "Show Component" : "Hide Component"}
					</button>
				</section>
			</div>
		</>
	);
}

export default App;
