const TableAlbums = ({ albums }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="p-4">Id</th>
          <th className="p-4">User Id</th>
          <th className="p-4">Title</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album) => (
          <tr key={album.id}>
            <td className="p-4">{album.id}</td>
            <td className="p-4">{album.userId}</td>
            <td className="p-4">{album.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAlbums;
