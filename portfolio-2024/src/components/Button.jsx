const Button = ({ text, onClick, className = "", active = false }) => {
  const hasRounded = className.includes('rounded');
  return (
    <button
      className={`border border-white-100 shadow-inner transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 py-2 mt-5
      text-black-400 font-normal backdrop-blur-sm bg-white-500/10 hover:bg-white-500/60 water-fill-btn
      ${hasRounded ? '' : 'md:rounded-2xl rounded-full'} 
      ${active ? "is-active !text-white-100 !border-transparent !ring-0" : ""}
      ${className}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
