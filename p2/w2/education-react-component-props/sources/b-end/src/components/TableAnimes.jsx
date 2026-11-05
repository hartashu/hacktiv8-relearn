import TableAnimesRow from "./TableAnimesRow";

const TableAnimes = ({ showOrHideComponentName, topAnimes }) => {
	return (
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
					<TableAnimesRow
						key={`anime-${idx + 1}`}
						anime={anime}
						idx={idx}
						showOrHideComponentName={showOrHideComponentName}
					/>
				))}
			</tbody>
		</table>
	);
};

export default TableAnimes;
