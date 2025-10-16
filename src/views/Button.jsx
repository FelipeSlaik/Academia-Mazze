function Button({ text, color, href }) {
  const colors = {
    "teal-black": "bg-red-700 hover:bg-red-600 text-white hover:text-black",
    teal: "bg-red-600 hover:bg-red-500 text-white hover:text-black p-4",
  };

  const colorClass = colors[color] || colors["teal-black"];

  // Se houver href, renderiza <a>
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${colorClass} px-6 py-2 font-bold rounded-lg cursor-pointer transition-colors duration-300`}
      >
        {text}
      </a>
    );
  }

  // Caso contrário, renderiza <button>
  return (
    <button
      className={`${colorClass} px-6 py-2 font-bold rounded-lg cursor-pointer transition-colors duration-300`}
    >
      {text}
    </button>
  );
}

export default Button;