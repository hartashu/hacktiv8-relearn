const CustomFooter = (
	// This is the props that we passed from App.jsx
	// We can use destructuring to get the value
	{ showOrHideComponentName, setShowOrHideComponentName },
) => {
	return (
		// We will use Fragment to wrap the JSX (Optional)
		<>
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
		</>
	);
};

export default CustomFooter;
