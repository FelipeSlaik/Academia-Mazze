import Button from "../../views/Button";
function Cabecalho() {
  return (
    <header className="flex justify-between items-center px-10 py-4 pt-2 shadow-md backdrop-opacity-85">
      <a href="#" className="text-4xl font-bold text-sky-700">
        <img src="../src/assets/logo.png" alt="Logo Academia da Mazze" className="w-24 h-24 rounded-3xl "/>
      </a>
      <nav>
        <ul className="flex gap-12 text-2xl font-medium">
          <li className="hover:text-sky-900">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-sky-900">
            <a href="#">Serviços</a>
          </li>
          <li className="hover:text-sky-900">
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
      <Button text="Agende!" color="teal-black"/>
    </header>
  );
}

export default Cabecalho;
