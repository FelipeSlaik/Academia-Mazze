function Button({ text, color }) {
  const colors = {
    "teal-black": "bg-teal-700 hover:bg-teal-600 text-white hover:text-zinc-900",
    teal: "bg-teal-600 hover:bg-teal-700 hover:text-white text-black",
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