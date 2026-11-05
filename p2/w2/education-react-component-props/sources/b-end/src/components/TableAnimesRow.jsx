const TableAnimesRow = ({ showOrHideComponentName, anime, idx }) => {
	return (
		<>
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
		</>
	);
};

export default TableAnimesRow;
