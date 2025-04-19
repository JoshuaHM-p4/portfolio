const Button = ({ text, onClick, className = "", active=false}) => {
  return (
    <button
      className={`bg-white-500 bg-opacity-25 border border-white-100 shadow-sm hover:bg-white-500 hover:bg-opacity-60 hover:shadow-md transition-all ease-in-out px-4 py-2 mt-5
      text-black-400 font-normal ${className}
     ${active
          ? "bg-white bg-opacity-60 text-black shadow-md font-semibold"
          : "bg-white-500 bg-opacity-25 text-black-400 hover:bg-white-500 hover:bg-opacity-60"
        }
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;