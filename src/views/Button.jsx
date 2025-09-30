function Button({ text, color }) {
  const colors = {
    "teal-black": "bg-red-700 hover:bg-red-600 text-white hover:text-black",
    teal: "bg-red-700 hover:bg-red-600  text-white hover:text-black",
  };


  const colorClass = colors[color] || colors["teal-black"];

  return (
    <button
      className={`${colorClass} px-4 py-2 font-bold rounded-lg cursor-pointer transition-colors duration-30`}
    >
      {text}
    </button>
  );
}

export default Button;