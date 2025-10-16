import { useState } from "react";
import Button from "../../views/Button";
import { HiMenu, HiX } from "react-icons/hi";

function Cabecalho({ scrollToHome, scrollToFeatures, scrollToLocation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-20 px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-transparent">
      
      {/* Top bar: logo + hamburger/menu desktop */}
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-4xl font-bold bg-sky-50 rounded-2xl"
        >
          <img
            src="../src/assets/logo.png"
            alt="Logo Academia da Mazze"
            className="w-20 h-20 rounded-3xl"
          />
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-2xl font-medium text-red-600">
          <button onClick={scrollToHome} className="hover:text-red-700 font-bold">
            Home
          </button>
          <button onClick={scrollToFeatures} className="hover:text-red-700 font-bold">
            Serviços
          </button>
          <button onClick={scrollToLocation} className="hover:text-red-700 font-bold">
            Localização
          </button>
        </nav>

        {/* WhatsApp button desktop */}
        <div className="hidden md:block">
          <Button
            text="Agende!"
            color="teal-black"
            href="https://wa.me/5511985145797?text=Olá!%20Quero%20agendar%20uma%20aula%20na%20Academia%20Mazze."
          />
        </div>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-red-600 text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile (empurra conteúdo) */}
      {menuOpen && (
        <div className="w-full flex flex-col items-center gap-6 mt-4 md:hidden bg-gray-900 text-white py-6 rounded-xl">
          <button
            onClick={() => { scrollToHome(); setMenuOpen(false); }}
            className="text-xl font-bold hover:text-red-400"
          >
            Home
          </button>
          <button
            onClick={() => { scrollToFeatures(); setMenuOpen(false); }}
            className="text-xl font-bold hover:text-red-400"
          >
            Serviços
          </button>
          <button
            onClick={() => { scrollToLocation(); setMenuOpen(false); }}
            className="text-xl font-bold hover:text-red-400"
          >
            Localização
          </button>
          <Button
            text="Agende!"
            color="teal-black"
            href="https://wa.me/5511985145797?text=Olá!%20Quero%20agendar%20uma%20aula%20na%20Academia%20Mazze."
          />
        </div>
      )}
    </header>
  );
}

export default Cabecalho;
