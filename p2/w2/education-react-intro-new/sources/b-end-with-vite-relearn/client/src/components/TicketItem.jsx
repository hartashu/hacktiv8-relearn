// TODO: Tangkap props yang dikirim dari App (misal: ticket dan onDelete)
export default function TicketItem({
  /* Tangkap props di sini */
  ticket,
  onDelete,
}) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex justify-between items-center">
      <div>
        {/* Tampilkan nama pemesan */}
        <h3 className="font-semibold text-white">
          {/* Tampilkan ticket.name di sini */ ticket.name}
        </h3>

        {/* Tampilkan studio badge */}
        <span className="inline-block text-xs px-2 py-0.5 rounded mt-1 font-medium bg-emerald-500/20 text-emerald-300">
          {/* Tampilkan ticket.studio di sini */ ticket.studio}
        </span>
      </div>

      {/* Hubungkan onClick tombol ini untuk memanggil fungsi onDelete yang dikirim parent */}
      <button
        onClick={
          /* Panggil aksi hapus beserta ID tiketnya */ () => onDelete(ticket.id)
        }
        className="px-3 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 text-sm rounded transition cursor-pointer"
      >
        Hapus
      </button>
    </div>
  );
}
