import axios from "axios";
import { useState } from "react";
import RootLayout from "../RootLayout";

const LoginPage = () => {
  // State untuk form nya kita
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formOnSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Username & Password", username, password);

    // ? Tembak ke backend
    // POST http://localhost:3000/users/login
    const { data } = await axios.post(
      "http://localhost:3000/users/login",
      {
        username,
        password,
      },
      // ! --- Cukup tau aja ---
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data);

    // ? Simpan di local storage
    localStorage.setItem("sekarepmu", data.access_token);
  };

  return (
    <RootLayout>
      <h1 className="text-3xl font-semibold">Login Page</h1>
      <form
        className="flex flex-col gap-4 p-4 rounded"
        onSubmit={formOnSubmitHandler}
      >
        <input
          type="text"
          className="px-4 py-2 hover:ring-2 hover:ring-emerald-100 focus:ring-2 focus:ring-amber-100 focus:outline-0 transition-all duration-300"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <input
          type="password"
          className="px-4 py-2 hover:ring-2 hover:ring-emerald-100 focus:ring-2 focus:ring-amber-100 focus:outline-0 transition-all duration-300"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <button
          className="bg-sky-200 hover:ring-2 hover:ring-emerald-100 focus:outline-0 focus:ring-2 focus:ring-amber-100 hover:bg-sky-400 hover:text-white transition-all duration-300 rounded px-4 py-2"
          type="submit"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Logout
        </button>
      </form>
    </RootLayout>
  );
};

export default LoginPage;
