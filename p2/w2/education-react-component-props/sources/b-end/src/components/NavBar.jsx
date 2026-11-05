const NavBar = ({ showOrHideComponentName, setWhichContent }) => {
	return (
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
	);
};

export default NavBar;
