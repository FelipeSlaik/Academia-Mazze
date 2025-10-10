import React, { useState, useEffect } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

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

    const reviewData = { name, comment, rating };

    if (editingId) {
      const res = await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      if (res.ok) {
        const updated = await res.json();
        setReviews((prev) =>
          prev.map((r) => (r.id === editingId ? updated : r))
        );
        setEditingId(null);
        setName("");
        setComment("");
        setRating(0);
      }
    } else {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      const data = await res.json();
      if (res.ok) {
        setReviews([data, ...reviews]);
        setName("");
        setComment("");
        setRating(0);
      }
    }
  };

  const handleEdit = (review) => {
    setEditingId(review.id);
    setName(review.name);
    setComment(review.comment);
    setRating(review.rating);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (res.ok) {
      setReviews(reviews.filter((r) => r.id !== id));
    }
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-red-500 uppercase tracking-wide">
          💬 Avaliações da Academia
        </h2>
        <p className="text-gray-400 mb-10">
          Veja o que nossos alunos estão dizendo e compartilhe sua experiência!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-red-600/30 mb-10"
        >
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`text-3xl transition-transform transform hover:cursor-pointer hover:scale-110 ${
                  value <= rating ? "text-red-500" : "text-gray-600"
                }`}
              >
                ★
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Escreva seu comentário..."
            className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-500 transition-all shadow-md hover:shadow-red-500/30 hover:cursor-pointer"
            >
              {editingId ? "💾 Salvar Alterações" : "🏋️ Enviar Avaliação"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setName("");
                  setComment("");
                  setRating(0);
                }}
                className="bg-gray-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-500 transition-all hover:cursor-pointer"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        {loading ? (
          <p>Carregando avaliações...</p>
        ) : reviews.length === 0 ? (
          <p className="text-gray-400">
            Nenhuma avaliação ainda. Seja o primeiro a mostrar sua força! 💪
          </p>
        ) : (
          <div className="space-y-6">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-[#1a1a1a] p-5 rounded-xl text-left shadow-md border border-red-600/30 hover:border-red-500/60 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-red-400">{r.name}</h3>
                  <div className="text-red-500 ">
                    {"★".repeat(r.rating)}{" "}
                    <span className="text-gray-700">
                      {"★".repeat(5 - r.rating)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-3">{r.comment}</p>

                <div className="flex gap-3">
                  <button type="button"
                    onClick={() => handleEdit(r)}
                    className="text-sm text-blue-400 hover:text-blue-300 transition hover:cursor-pointer"
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => handleDelete(r.id)}
                    className="text-sm text-red-400 hover:text-red-300 transition hover:cursor-pointer"
                  >
                    🗑️ Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Reviews;
