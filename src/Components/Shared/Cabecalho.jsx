import Button from "../../views/Button";

function Cabecalho() {
  return (
    <header className="w-full z-20 px-10 py-4 flex justify-between items-center bg-transparent">
      <a
        href="#"
        className="flex items-center text-4xl font-bold bg-sky-50 rounded-2xl"
      >
        <img
          src="../src/assets/logo.png"
          alt="Logo Academia da Mazze"
          className="w-20 h-20 rounded-3xl "
        />
      </a>

      <nav className="flex gap-12 text-2xl font-medium text-red-600">
        <a href="#" className="hover:text-red-700 font-bold">
          Home
        </a>
        <a href="#" className="hover:text-red-700 font-bold">
          Serviços
        </a>
        <a href="#" className="hover:text-red-700 font-bold">
          Contato
        </a>
      </nav>

      <Button text="Agende!" 
      color="teal-black"
       href="https://wa.me/5511985145797?text=Olá!%20Quero%20agendar%20uma%20aula%20%20na%20Academia%20Mazze."
      />
    </header>
  );
}

export default Cabecalho;
