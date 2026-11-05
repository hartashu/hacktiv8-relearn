const FormInput = ({
	showOrHideComponentName,
	formSubmissionOnClickHandler,
	formInputData,
	setFormInputData,
}) => {
	return (
		<section
			className={`${showOrHideComponentName ? "border-2 border-red-400" : ""} p-2 w-full`}
		>
			<h1 className={`${showOrHideComponentName ? "" : "hidden"} text-lg`}>
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
	);
};

export default FormInput;
