import axios from "axios";
import { useEffect, useState } from "react";

const SmartphonePage = () => {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    const fetchDataSmartphones = async () => {
      const token = localStorage.getItem("sekarepmu");

      // ? Logic untuk comot data
      const { data } = await axios.get("http://localhost:3000/smartphones", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSmartphones(data.data.slice(0, 12));
    };

    fetchDataSmartphones();
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-4 bg-emerald-100">
      <h1 className="text-3xl font-semibold">Smartphone Page</h1>
      {/* <pre>{JSON.stringify(smartphones, null, 2)}</pre> */}

      {/* Grid 2 kolom */}
      <div className="grid grid-cols-3 gap-4">
        {smartphones.map((smartphone) => (
          <div className="flex gap-2">
            <span>{smartphone.id}</span>
            <span>{smartphone.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SmartphonePage;
