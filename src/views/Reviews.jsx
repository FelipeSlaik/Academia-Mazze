import React, { useState, useEffect } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000/api/reviews";

  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) {
      alert("Preencha todos os campos!");
      return;
    }

    const newReview = { name, comment, rating };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    const data = await res.json();
    if (res.ok) {
      setReviews([data, ...reviews]);
      setName("");
      setComment("");
      setRating(0);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">💬 Avaliações dos Alunos</h2>
        <p className="text-gray-400 mb-10">
          Veja o que nossos alunos estão dizendo e deixe sua opinião!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10"
        >
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`text-3xl ${
                  value <= rating ? "text-yellow-400" : "text-gray-500 cursor-pointer"
                }`}
              >
                ★
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 mb-4 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Escreva seu comentário..."
            className="w-full p-3 mb-4 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
            Enviar Avaliação
          </button>
        </form>

        {loading ? (
          <p>Carregando avaliações...</p>
        ) : reviews.length === 0 ? (
          <p className="text-gray-400">Nenhuma avaliação ainda 😅</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-gray-800 p-5 rounded-xl text-left shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{r.name}</h3>
                  <div className="text-yellow-400">
                    {"★".repeat(r.rating)}{" "}
                    <span className="text-gray-500">
                      {"★".repeat(5 - r.rating)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300">{r.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Reviews;
