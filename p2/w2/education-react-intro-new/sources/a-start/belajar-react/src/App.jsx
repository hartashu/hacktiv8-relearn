import { useState } from "react";

const App = () => {
  // ! JANGAN DIGUNAKAN LAGI
  // const namaOrang = "Orang Lain"; // Ini variable js yang biasa
  const [namaOrang, setNamaOrang] = useState("Value Reaktif");
  const [iniOrangUdahMasukBelom, setIniOrangUdahMasukBelom] = useState(false);
  const [todoList, setTodoList] = useState([
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

  const [inputTodoJob, setInputTodoJob] = useState("");
  const [inputTodoDesc, setInputTodoDesc] = useState("");
  const [inputTodoPriority, setInputTodoPriority] = useState("Low");

  const inputOnChangeHandler = (event) => {
    const valueBaru = event.target.value;
    setNamaOrang(valueBaru);
  };

  const btnLetsGoOnClickHandler = () => {
    setIniOrangUdahMasukBelom(true);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    console.log(inputTodoJob, inputTodoDesc, inputTodoPriority);

    const objTodoYangBaru = {
      id: todoList[todoList.length - 1].id + 1,
      name: inputTodoJob,
      description: inputTodoDesc,
      priority: inputTodoPriority,
    };

    const arrayYangBaru = [
      // todoList yang lama
      ...todoList,
      objTodoYangBaru,
    ];

    setTodoList(arrayYangBaru);
  };

  return (
    // Fragment
    <>
      {/* <!-- Section 1 --> */}
      <section className="relative w-full px-8 text-gray-700 bg-white body-font">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <a
            href="#_"
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
          >
            ToDo ReactJS v1
          </a>

          {/* Conditional Rendering */}
          {iniOrangUdahMasukBelom && (
            <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
              >
                Hello, {namaOrang}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* <!-- Section 2 --> */}
      {!iniOrangUdahMasukBelom && (
        <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center md:flex-row">
              <div className="w-full mt-16 md:mt-0 md:w-5/5">
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                  <img
                    className="mx-auto mb-8 rounded-full"
                    src="https://placedog.net/100/100"
                    alt="Placeholder 100x100"
                  />
                  <h3 className="mb-6 text-2xl font-medium text-center">
                    Identity
                  </h3>
                  <input
                    id="inputNamaOrang"
                    type="text"
                    name="user-name"
                    className="block w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Your Name"
                    value={namaOrang}
                    onChange={inputOnChangeHandler}
                  />
                  <div className="block">
                    <button
                      type="button"
                      className="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                      onClick={btnLetsGoOnClickHandler}
                    >
                      Let's Go
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* <!-- Section 3 --> */}
      {iniOrangUdahMasukBelom && (
        <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center md:flex-row">
              <form
                onSubmit={formOnSubmitHandler}
                className="w-full mt-16 md:mt-0 md:w-5/5"
              >
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                  <h3 className="mb-6 text-2xl font-medium text-center">
                    Add ToDo
                  </h3>
                  <input
                    type="text"
                    name="todo-name"
                    className="block w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="ToDo Job"
                    value={inputTodoJob}
                    onChange={(event) => setInputTodoJob(event.target.value)}
                  />
                  <input
                    type="text"
                    name="todo-description"
                    className="block w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="ToDo Description"
                    value={inputTodoDesc}
                    onChange={(event) => setInputTodoDesc(event.target.value)}
                  />

                  <select
                    name="todo-priority"
                    className="block w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    value={inputTodoPriority}
                    onChange={(event) =>
                      setInputTodoPriority(event.target.value)
                    }
                  >
                    <option selected disabled hidden></option>
                    <option value="Low">Low</option>
                    <option value="Critical">Critical</option>
                    <option value="Highest">Highest</option>
                  </select>

                  <div className="block">
                    <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* <!-- Section 4 --> */}
      {iniOrangUdahMasukBelom && (
        <section className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
          <div className="container px-8 mx-auto sm:px-12 xl:px-5">
            <p className="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
              See Your ToDo Here
            </p>
            <h3 className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center">
              ToDo List
            </h3>

            {/* <!-- List of ToDo Here --> */}

            {/* <!-- ToDo 1 --> */}
            {todoList.map((todo) => (
              <div
                key={todo.id}
                className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
              >
                <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
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
                    <div>
                      <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
              <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
                Belajar React
              </h3>

              <div className="flex flex-wrap">
                <div className="w-full md:w-3/4 px-4 mb-4 md:mb-0">
                  <p className="mt-2 mr-2 text-base text-gray-600 sm:text-normal md:text-sm inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold">
                    Critical
                  </p>
                  <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                    Belajar React dari situs React-nya langsung
                  </p>
                </div>
                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                  <div>
                    <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      )}

      {/* <!-- Section 5 - Footer --> */}
      <section className="text-gray-700 bg-white body-font">
        <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
          {/* <!-- Left Side --> */}
          <a
            href="#_"
            className="text-xl font-black leading-none text-gray-900 select-none logo"
          >
            ToDo ReactJS v1
          </a>

          {/* <!-- Right Side --> */}
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
              © Tailwindcss Page Builder x withered-flowers
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

// ! Dalam 1 file, HANYA BOLEH ADA 1 EXPORT DEFAULT
export default App;
