import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onclose();
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" //[cite: 7]
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-800 border border-slate-700 p-6 rounded-2xl max-w-lg w-full text-white relative" //[cite: 7]
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white" //[cite: 7]
        >
          ✕
        </button>
        {children} {/*[cite: 7] */}
      </div>
    </div>,
    document.body, //[cite: 7]
  );
}
