import { createPortal } from 'react-dom';

const Lightbox = ({ src, alt, onClose }) => {
  return createPortal(
    <div
      className="fixed inset-0 bg-white/30 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white-500/10 border border-white-100 backdrop-blur-sm text-black-400 hover:bg-white-500/60 transition-all ease-in-out"
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]"
      />
    </div>,
    document.body
  );
};

export default Lightbox;
