function Button({ text, color }) {
  const colors = {
    "teal-black": "bg-red-700 hover:bg-red-600 text-white hover:text-black",
    teal: "bg-red-600 hover:bg-red-500  text-white hover:text-black p-4",
  };


  const colorClass = colors[color] || colors["teal-black"];

  return (
    <button
      className={`${colorClass} px-6 py-2 font-bold rounded-lg cursor-pointer transition-colors duration-30`}
    >
      {text}
    </button>
  );
}

export default Button;