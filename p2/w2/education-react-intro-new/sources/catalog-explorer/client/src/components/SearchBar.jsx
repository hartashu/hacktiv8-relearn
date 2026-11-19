import { useState } from 'react';

export default function SearchBar({ onSearchSubmit }) {
  const [term, setTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(term);
  }

  function handleReset() {
    setTerm('');
    onSearchSubmit('');
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Ketik lalu tekan Enter..."
        className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm"
      />
      {term && (
        <button
          type="button"
          onClick={handleReset}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded"
        >
          Reset
        </button>
      )}
    </form>
  );
}
