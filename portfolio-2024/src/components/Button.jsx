const Button = ({ text, onClick, className = "", active=false}) => {
  return (
    <button
      className={`border border-white-100 shadow-sm transition-all ease-in-out px-4 py-2 mt-5
      text-black-400 font-normal backdrop-blur-sm rounded-md ${className}
     ${active
          ? "bg-white/60 text-black shadow-md font-semibold"
          : "bg-white-500/10 text-black-400 hover:bg-white-500/40"
        }
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
