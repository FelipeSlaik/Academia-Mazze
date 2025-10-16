import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="Academia da Mazze"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl mb-4 bg-sky-50"
          />
          <p className="text-gray-400 max-w-sm text-sm sm:text-base">
            Venha treinar com a gente na Academia Mazze em São Roque! Transforme sua vida.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-bold text-lg sm:text-xl mb-2">Siga-nos</h3>
          <div className="flex gap-4 text-xl sm:text-2xl">
            <a
              href="https://www.facebook.com/share/1Be6LVGT5a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/mazzeeuzebio?igsh=ZXpmeHo0YjNpdG5r"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2 text-gray-400 text-center md:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-2">Contato</h3>
          <p className="text-sm sm:text-base">📍 Rua Barão de Piratininga, 107, Centro, São Roque/SP</p>
          <p className="text-sm sm:text-base">📞 (11) 98514-5797</p>
          <p className="text-sm sm:text-base">✉️ contato@academiadamazze.com.br</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Academia da Mazze. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
