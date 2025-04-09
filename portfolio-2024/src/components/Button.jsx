const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-white-500 bg-opacity-25 border border-white-100 rounded-md shadow-md hover:bg-white-500 hover:bg-opacity-60 hover:shadow-lg transition-all ease-in-out px-4 py-2 mt-5
      text-black-400 font-normal"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;