import React from "react";

function Location() {
  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-4">
          📍 Onde Estamos – Academia Mazze
        </h2>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Venha treinar com a gente em São Roque! Nossa academia está de portas
          abertas.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
          <iframe
            title="Mapa da Academia Mazze"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0!2d-47.1369!3d-23.5299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f1ad8a49cb79%3A0x2ed9c23ce40ed2c5!2sAcademia%20Mazze!5e0!3m2!1spt-BR!2sbr!4v1697430000000!5m2!1spt-BR!2sbr"
            width="100%"
            className="h-72 sm:h-80 md:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        <p className="text-gray-800 font-semibold mb-6 text-sm sm:text-base">
          Rua Barão de Piratininga, 107 — Centro, São Roque/SP
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 space-y-4 sm:space-y-0">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Academia+Mazze,+Rua+Bar%C3%A3o+de+Piratininga+107,+São+Roque+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors w-full sm:w-auto text-sm sm:text-base"
          >
            Ver no Google Maps
          </a>

          <a
            href="https://wa.me/5511985145797?text=Olá!%20Quero%20me%20matricular%20na%20Academia%20Mazze."
            target="_blank"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-red-100 transition w-full sm:w-auto text-sm sm:text-base"
          >
            Quero Agendar Agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Location;
