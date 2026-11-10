import { useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketItem from './components/TicketItem';

export default function App() {
  // TODO: Buat state array tickets di sini
  const [tickets, setTickets] = useState([]);

  // TODO: Buat handler untuk menambah tiket baru (menerima param objek tiket baru)
  function handleAddTicket(newTicket) {
    /* Logika tambah tiket ke state */
    setTickets((prev) => [...prev, newTicket]);
  }

  // TODO: Buat handler untuk menghapus tiket (menerima param targetId)
  function handleDeleteTicket(targetId) {
    /* Logika filter tiket dari state */
    setTickets((prev) => prev.filter((ticket) => ticket.id !== targetId));
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 flex justify-center">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-sky-400">
          Mini Ticket Booker (Modular)
        </h1>

        {/* 1. Render TicketForm dan kirim handler handleAddTicket via props */}
        <TicketForm onAddTicket={handleAddTicket} />

        {/* 2. Render List Tiket */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-300">
            Daftar Tiket ({/* Tampilkan panjang array tickets */ tickets.length}
            )
          </h2>

          {
            /* TODO: 
              Lakukan pengecekan conditional rendering:
              - Jika array kosong: tampilkan pesan belum ada tiket
              - Jika ada isi: looping dengan .map() dan render <TicketItem />
              - Jangan lupa passing key, ticket, dan onDelete ke TicketItem
          */
            tickets.length === 0 ? (
              <div>Belum ada tiket</div>
            ) : (
              tickets.map((ticket) => (
                <TicketItem
                  key={ticket.id}
                  ticket={ticket}
                  onDelete={handleDeleteTicket}
                />
              ))
            )
          }
        </div>
      </div>
    </div>
  );
}
