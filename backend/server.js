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

function ensureFileExists() {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, "[]", "utf-8");
  }
}

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

app.listen(PORT, () =>
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`)
);
