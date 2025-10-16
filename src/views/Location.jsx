import React from "react";

function Location() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          📍 Onde Estamos – Academia Mazze
        </h2>
        <p className="text-gray-600 mb-8">
          Venha treinar com a gente em São Roque! Nossa academia está de portas
          abertas.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
          <iframe
            title="Mapa da Academia Mazze"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0!2d-47.1369!3d-23.5299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f1ad8a49cb79%3A0x2ed9c23ce40ed2c5!2sAcademia%20Mazze!5e0!3m2!1spt-BR!2sbr!4v1697430000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        <p className="text-gray-800 font-semibold mb-6">
          Rua Barão de Piratininga, 107 — Centro, São Roque/SP
        </p>

        <div className="space-y-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Academia+Mazze,+Rua+Bar%C3%A3o+de+Piratininga+107,+São+Roque+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors"
          >
            Ver no Google Maps
          </a>

         
          <div className="bg-red-600 text-white mt-10 py-8 px-4 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3">
              💥 Agende sua aula experimental gratuita!
            </h3>
            <p className="mb-5 text-orange-100">
              Venha conhecer a Academia Mazze e começar sua transformação hoje
              mesmo.
            </p>
            <a
              href="#contato"
              className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-red-100 transition"
            >
              Quero Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
