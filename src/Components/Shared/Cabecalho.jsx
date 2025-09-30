import Button from "../../views/Button";

function Cabecalho() {
  return (
    <header className="w-full bg-transparent flex justify-between items-center px-10 py-4">
     
      <a href="#" className="flex items-center text-4xl font-bold bg-sky-50 rounded-2xl">
        <img
          src="../src/assets/logo.png"
          alt="Logo Academia da Mazze"
          className="w-20 h-20 rounded-3xl"
        />
      </a>

      
      <nav className="flex gap-12 text-2xl font-medium text-red-800">
        <a href="#" className="hover:text-red-700">Home</a>
        <a href="#" className="hover:text-red-700">Serviços</a>
        <a href="#" className="hover:text-red-700">Contato</a>
      </nav>

      
      <Button text="Agende!" color="teal-black" />
    </header>
  );
}

export default Cabecalho;
