const FormResult = ({ showOrHideComponentName, stateData }) => {
	return (
		<section
			className={`${showOrHideComponentName ? "border-2 border-red-400" : ""} p-2 w-full`}
		>
			<h1 className={`${showOrHideComponentName ? "" : "hidden"} text-lg`}>
				Component Form Result
			</h1>

			<div className="p-2 my-2 bg-green-200 rounded-xl">
				<p>Tulisan dari Form adalah:</p>
				<p className="text-center font-semibold">
					{stateData ? stateData : "Empty Placeholder"}
				</p>
			</div>
		</section>
	);
};

export default FormResult;
