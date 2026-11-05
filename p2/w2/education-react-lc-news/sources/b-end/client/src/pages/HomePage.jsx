// const axios = require('axios');
import axios from "axios";
import { useState, useEffect } from "react";
import TableAlbums from "../components/TableAlbums";
import RootLayout from "../RootLayout";

// const fetchAlbums = async () => {
//   // Tampilkan ke dalam console log
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/albums"
//   );
//   console.log(response);
// };

// Functional Component (React 16.x)
const HomePage = () => {
  // Declare state yang akan digunakan
  const [albums, setAlbums] = useState([]);

  // const btnOnClickHandler = async () => {
  //   const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/albums"
  //   );

  //   setAlbums(data.slice(0, 5));
  // };

  useEffect(() => {
    // Kita akan menjalankan logic atau fungsi yang bersifat side effect
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );

      console.log("berhasil");

      setAlbums(data.slice(0, 5));
    })();
  }, []);

  return (
    <RootLayout>
      <h1 className="text-3xl font-semibold">Home Page</h1>

      {/* <button
        className="bg-sky-200 hover:bg-sky-400 hover:text-white transition-colors duration-300 rounded-xl px-4 py-2"
        type="button"
        onClick={btnOnClickHandler}
      >
        Comot data album
      </button> */}

      {albums.length > 0 && <TableAlbums albums={albums} />}
    </RootLayout>
  );
};

export default HomePage;
