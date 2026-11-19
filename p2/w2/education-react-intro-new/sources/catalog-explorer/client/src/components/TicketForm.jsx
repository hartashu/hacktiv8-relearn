import { useState } from 'react';

// TODO: Tangkap prop function untuk menambah tiket dari App (misal: onAddTicket)
export default function TicketForm({
  /* Tangkap props di sini */
  onAddTicket,
}) {
  // TODO: Siapkan state untuk input nama dan studio di sini
  const [name, setName] = useState('');
  const [studio, setStudio] = useState('Regular');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO:
    // 1. Validasi input nama
    // 2. Buat objek data tiket baru
    // 3. Panggil prop function (misal: onAddTicket(newTicket))
    // 4. Reset input

    if (name.trim().length === 0) {
      return;
    }

    const newTicket = {
      id: Date.now(),
      name,
      studio,
    };

    onAddTicket(newTicket);

    setName('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-300">
          Nama Pemesan
        </label>
        <input
          type="text"
          placeholder="Masukkan nama..."
          // TODO: Pasang value dan onChange untuk Controlled Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-500 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-slate-300">
          Tipe Studio
        </label>
        <select
          // TODO: Pasang value dan onChange untuk select option
          value={studio}
          onChange={(e) => setStudio(e.target.value)}
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-500 text-white"
        >
          <option value="Regular">Regular</option>
          <option value="IMAX">IMAX</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-sky-500 hover:bg-sky-600 transition font-semibold rounded-lg text-white cursor-pointer"
      >
        Pesan Tiket
      </button>
    </form>
  );
}
