import express from "express";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, "reviews.json");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// 🔒 Garante que o arquivo exista
function ensureFileExists() {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, "[]", "utf-8");
  }
}

// 🔹 GET – listar avaliações
app.get("/api/reviews", (req, res) => {
  ensureFileExists();
  fs.readFile(FILE_PATH, (err, data) => {
    if (err) return res.status(500).json({ error: "Erro ao ler arquivo" });
    try {
      const reviews = JSON.parse(data);
      res.json(reviews);
    } catch (e) {
      res.status(500).json({ error: "Erro ao parsear JSON" });
    }
  });
});

// 🔹 POST – criar nova avaliação
app.post("/api/reviews", (req, res) => {
  const { name, comment, rating } = req.body;
  if (!name || !comment || !rating)
    return res.status(400).json({ error: "Preencha todos os campos" });

  ensureFileExists();

  fs.readFile(FILE_PATH, (err, data) => {
    if (err) return res.status(500).json({ error: "Erro ao ler arquivo" });

    let reviews = [];
    try {
      reviews = JSON.parse(data);
    } catch {
      reviews = [];
    }

    const newReview = {
      id: Number(Date.now()),
      name,
      comment,
      rating,
      date: new Date().toISOString(),
    };
    reviews.unshift(newReview);

    fs.writeFile(FILE_PATH, JSON.stringify(reviews, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Erro ao salvar review" });
      res.status(201).json(newReview);
    });
  });
});

// 🧩 PUT – editar avaliação existente
app.put("/api/reviews/:id", (req, res) => {
  const reviewId = parseInt(req.params.id);
  const { name, comment, rating } = req.body;

  ensureFileExists();

  fs.readFile(FILE_PATH, (err, data) => {
    if (err) return res.status(500).json({ error: "Erro ao ler arquivo" });

    let reviews = [];
    try {
      reviews = JSON.parse(data);
    } catch {
      return res.status(500).json({ error: "Erro ao parsear JSON" });
    }

    const index = reviews.findIndex((r) => Number(r.id) === reviewId);
    if (index === -1) return res.status(404).json({ error: "Review não encontrado" });

    reviews[index] = { ...reviews[index], name, comment, rating };

    fs.writeFile(FILE_PATH, JSON.stringify(reviews, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Erro ao atualizar review" });
      res.json(reviews[index]);
    });
  });
});

// 🗑️ DELETE – remover avaliação
app.delete("/api/reviews/:id", (req, res) => {
  const reviewId = parseInt(req.params.id);

  ensureFileExists();

  fs.readFile(FILE_PATH, (err, data) => {
    if (err) return res.status(500).json({ error: "Erro ao ler arquivo" });

    let reviews = [];
    try {
      reviews = JSON.parse(data);
    } catch {
      return res.status(500).json({ error: "Erro ao parsear JSON" });
    }

    const filtered = reviews.filter((r) => Number(r.id) !== reviewId);


    if (filtered.length === reviews.length)
      return res.status(404).json({ error: "Review não encontrado" });

    fs.writeFile(FILE_PATH, JSON.stringify(filtered, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Erro ao excluir review" });
      res.status(200).json({ message: "Review excluído com sucesso" });
    });
  });
});

app.listen(PORT, () =>
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`)
);
