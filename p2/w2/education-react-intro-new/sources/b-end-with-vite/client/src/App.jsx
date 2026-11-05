// TODO - Langkah 3b: Hapus seluruh import yang tidak digunakan
// TODO - Langkah 8: Import function yang dibutuhkan untuk mengakses data reaktif (state) pada React
import { useState } from "react";

// TODO - Langkah 2b: Hapus file src/App.css dan uncomment import pada src/App.jsx
// import './App.css'

function App() {
	// TODO - Langkah 9: Membuat "data" reaktif (state) untuk kondisi login dan username
	// Di sini kita akan menggunakan "data" yang bisa digunakan secara "reaktif"
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState("");

	// TODO - Langkah 17: Membuat data dummy untuk Todo (ambil dari server/db.json)
	const [todos, setTodos] = useState([
		{
			id: 1,
			name: "Belajar React",
			description: "Belajar React dari situs React-nya langsung",
			priority: "Critical",
		},
		{
			id: 2,
			name: "Belajar Tailwind",
			description: "Belajar Tailwind dari situs Tailwind-nya langsung",
			priority: "Low",
		},
		{
			id: 3,
			name: "Buat Aplikasi ToDo",
			description:
				"Buat aplikasi ToDo sederhana dengan memanfaatkan React dan Tailwind",
			priority: "Highest",
		},
		{
			id: 4,
			name: "Implementasi json-server",
			description: "Tarik data dengan React + json-server",
			priority: "Critical",
		},
	]);

	// TODO - Langkah 19: Membuat "data" reaktif (state) untuk data AddTodo
	const [formAddTodo, setFormAddTodo] = useState({
		name: "",
		description: "",
		priority: "",
	});

	// TODO - Langkah 12: Membuat fungsi untuk membaca perubahan input
	const fnOnChangeBacaPerubahanInput = (event) => {
		// Kita akan membaca data yang diterima oleh input
		const inputValue = event.target.value;

		// Kita akan mengubah "data" reaktif (state) username
		setUsername(inputValue);
	};

	// TODO - Langkah 14: Membuat fungsi untuk memasukkan identitas pengguna
	const fnOnClickMemasukkanIdentitas = (event) => {
		// Di sini kita akan menggunakan suatu hal untuk menghentikan aksi default dari suatu event
		event.preventDefault();

		// Kita akan mengubah "data" reaktif (state) isLoggedIn
		setIsLoggedIn(true);
	};

	// TODO - Langkah 20: Membuat fungsi untuk menghandle input Form Todo
	const fnOnChangeFormAddTodoSemuanya = (event) => {
		// Kita akan membaca data yang diterima oleh input
		const inputValue = event.target.value;

		// Kita akan membaca input nya ini dari mana?
		// Ingat input namenya adalah "todo-name", "todo-description", "todo-priority"
		// sedangkan datanya adalah "name", "description", "priority"
		const inputName = event.target.name;
		const columnName = inputName.split("-")[1];

		console.log(inputName, columnName);

		// Kita akan mengubah "data" reaktif (state) formAddTodo
		// Jangan lupa untuk menggunakan [] karena takutnya ada mengandung spasi atau karakter spesial
		setFormAddTodo(
			// Ingat baik baik rules data react: Immutability
			{
				...formAddTodo,
				[columnName]: inputValue,
			},
		);
	};

	// TODO - Langkah 22: Membuat fungsi untuk menghandle Form Add Todo
	const fnOnSubmitFormAddTodo = (event) => {
		// Yang pasti harus tidak boleh refresh
		event.preventDefault();

		// Kita akan mengubah "data" reaktif (state) todos berdasarkan formAddTodo
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				...formAddTodo,
			},
		]);
	};

	// TODO - Langkah 24: Membuat fungsi untuk kembali ke halaman utama
	const fnOnClickKembaliKeHalamanUtama = (event) => {
		event.preventDefault();

		setUsername("");
		setIsLoggedIn(false);
	};

	// TODO - Langkah 3a: Hapus seluruh code yang ada di dalam function App
	// TODO - Langkah 4: Copy isi dari body yang ada di template (index.html) ke sini
	return (
		// Ini dinamakan dengan "Fragment"
		// Bagian dari Tag HTML yang tidak memiliki nama

		// (Tidak akan di-render ke DOM, hanya sebagai pembungkus)
		<>
			{/* Di sini lah kita akan memasukkan isi dari body HTML yang dibuat sebelumnya */}
			{/* Minus si Script-nya yah ! */}

			{/* TODO - Langkah 5: Ganti cara untuk melakukan comment (dari HTML ke JSX) */}
			{/* TODO - Langkah 6: Ganti cara untuk menggunakan class (class -> className) */}
			{/* TODO - Langkah 7: Ganti cara untuk menggunakan select selected (selected dibuang, diganti jadi defaultValue) */}
			<section className="relative w-full px-8 text-gray-700 bg-white body-font">
				<div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
					<a
						href="#_"
						className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
					>
						ToDo ReactJS v1
					</a>

					{/* TODO - Langkah 11a: Membuat Tampilan yang akan muncul berdasarkan kondisi tertentu (conditional rendering) */}
					{isLoggedIn && (
						<div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
							{/* TODO: Langkah 25 - Mengimplementasikan Kembali ke halaman utama */}
							<button
								type="button"
								href="#"
								className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
								onClick={fnOnClickKembaliKeHalamanUtama}
							>
								{/* TODO - Langkah 10: Tampilkan isi state username di sini */}
								Hello, {username}
							</button>
						</div>
					)}
				</div>
			</section>

			{/* TODO - Langkah 16: Jangan lupa untuk membuat conditional rendering ketika user sudah logged in */}
			{!isLoggedIn && (
				<>
					{/* Section 2 */}
					<section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
						<div className="max-w-5xl mx-auto">
							<div className="flex flex-col items-center md:flex-row">
								{/* <div className="w-full space-y-5 md:w-3/5 md:pr-16">
          <p className="font-medium text-blue-500 uppercase">Building Businesses</p>
          <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
            Changing The Way People Do Business.
          </h2>
          <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach them about your
            mission. We're revolutionizing the way customers and businesses interact.</p>
        </div> */}

								<div className="w-full mt-16 md:mt-0 md:w-5/5">
									<div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
										<img
											className="mx-auto mb-8 rounded-full"
											src="https://placecats.com/80/80"
											alt="Placeholder 80x80"
										/>
										<h3 className="mb-6 text-2xl font-medium text-center">
											Identity
										</h3>
										{/* TODO - Langkah 13: Memodifikasi input untuk bisa menerima dan mengganti state username */}
										<input
											type="text"
											name="user-name"
											className="block w-full px-4 py-3 mb-4 border border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
											placeholder="Your Name"
											value={username}
											onChange={fnOnChangeBacaPerubahanInput}
										/>
										<div className="block">
											{/* TODO - Langkah 15: Menambahkan event onClick pada button untuk bisa berpindah halaman */}
											<button
												type="button"
												className="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
												onClick={fnOnClickMemasukkanIdentitas}
											>
												Let&apos;s Go
											</button>
										</div>
										{/* <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_"
                className="text-blue-500 underline">Sign up here</a></p> */}
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			)}

			{/* TODO - Langkah 11b: Membuat Tampilan yang akan muncul berdasarkan kondisi tertentu (conditional rendering) */}
			{isLoggedIn && (
				<>
					{/* Section 3 */}
					<section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
						<div className="max-w-5xl mx-auto">
							<div className="flex flex-col items-center md:flex-row">
								{/* <div className="w-full space-y-5 md:w-3/5 md:pr-16">
          <p className="font-medium text-blue-500 uppercase">Building Businesses</p>
          <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
            Changing The Way People Do Business.
          </h2>
          <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach them about your
            mission. We're revolutionizing the way customers and businesses interact.</p>
        </div> */}

								{/* TODO - Langkah 23: Menambahkan event onSubmit pada form */}
								<form
									className="w-full mt-16 md:mt-0 md:w-5/5"
									onSubmit={fnOnSubmitFormAddTodo}
								>
									<div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
										<h3 className="mb-6 text-2xl font-medium text-center">
											Add ToDo
										</h3>
										{/* TODO - Langkah 21: set value dan onChange untuk seluruh input Form Add Todo */}
										<input
											type="text"
											name="todo-name"
											className="block w-full px-4 py-3 mb-4 border border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
											placeholder="ToDo Job"
											value={formAddTodo.name}
											onChange={fnOnChangeFormAddTodoSemuanya}
										/>
										<input
											type="text"
											name="todo-description"
											className="block w-full px-4 py-3 mb-4 border border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
											placeholder="ToDo Description"
											value={formAddTodo.description}
											onChange={fnOnChangeFormAddTodoSemuanya}
										/>
										{/* <input type="text" name="todo-priority"
              className="block w-full px-4 py-3 mb-4 border border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="ToDo Priority"> */}

										<select
											name="todo-priority"
											className="block w-full px-4 py-3 mb-4 border border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
											// defaultValue=""
											value={formAddTodo.priority}
											onChange={fnOnChangeFormAddTodoSemuanya}
										>
											<option disabled hidden />
											<option value="Low">Low</option>
											<option value="Critical">Critical</option>
											<option value="Highest">Highest</option>
										</select>

										<div className="block">
											<button
												type="submit"
												className="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
											>
												Add
											</button>
										</div>
										{/* <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_"
                className="text-blue-500 underline">Sign up here</a></p> */}
									</div>
								</form>
							</div>
						</div>
					</section>

					{/* Section 4 */}
					<section className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
						<div className="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
							<p className="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
								See Your ToDo Here
							</p>
							<h3 className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
								ToDo List
							</h3>

							{/* List of ToDo Here */}

							{/* TODO - Langkah 18: Membuat looping element (Rendering List) */}
							{/* ToDo 1 */}
							{todos.map((todo) => (
								// Jangan lupa untuk element yang di-looping harus memiliki "key" yang unik
								<div
									className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
									key={todo.id}
								>
									<h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
										{/* Di sini, gunakan data dari "todo" */}
										{todo.name}
									</h3>

									<div className="flex flex-wrap">
										<div className="w-full md:w-3/4 px-4 mb-4 md:mb-0">
											<p className="mt-2 mr-2 text-base text-gray-600 sm:text-normal md:text-sm inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold">
												{todo.priority}
											</p>
											<p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
												{todo.description}
											</p>
										</div>
										<div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
											{/* <div className="mb-4">
          <button
            className="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Edit</button>
        </div> */}
											<div>
												<button
													type="button"
													className="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
												>
													Delete
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				</>
			)}

			{/* Section 5 - Footer */}
			<section className="text-gray-700 bg-white body-font">
				<div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
					{/* Left Side */}
					<a
						href="#_"
						className="text-xl font-black leading-none text-gray-900 select-none logo"
					>
						ToDo ReactJS v1
					</a>

					{/* Right Side */}
					<span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
						<p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
							© Tailwindcss Page Builder x withered-flowers
						</p>
					</span>
				</div>
			</section>
		</>
	);
}

export default App;
