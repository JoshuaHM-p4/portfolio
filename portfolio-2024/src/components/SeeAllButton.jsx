const SeeAllButton = ({ text, onClick }) => (
  <div className="group relative w-full">
    {/* base soft fade */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-24 bottom-0
        bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.04)_50%,rgba(255,255,255,0.18)_100%)]
        md:rounded-b-2xl rounded-b-full"
    />
    {/* hover fade — same shape, brighter; cross-fades in so no hard edge */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-24 bottom-0
        bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.5)_100%)]
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
        md:rounded-b-2xl rounded-b-full"
    />
    <button
      type="button"
      onClick={onClick}
      className="relative w-full py-3 flex flex-col items-center justify-center gap-1
        cursor-pointer md:rounded-b-2xl rounded-b-full
        font-texturina text-black-400 text-sm tracking-wide"
      aria-label={text}
    >
      <span>{text}</span>
      <svg
        aria-hidden="true"
        width="14" height="8" viewBox="0 0 14 8"
        fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:translate-y-0.5"
      >
        <polyline points="1,1 7,7 13,1" />
      </svg>
    </button>
  </div>
);

export default SeeAllButton;
