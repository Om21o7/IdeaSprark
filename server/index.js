import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

// Enable CORS for frontend
app.use(cors({
  origin: "http://localhost:3000", // React frontend URL
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json()); // Parse JSON

// Initialize OpenAI with API key from .env
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Root route
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// AI route
app.post("/ask", async (req, res) => {
  const { question, ideaTitle } = req.body;

  if (!question || !ideaTitle) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `For the idea "${ideaTitle}": ${question}` },
      ],
    });

    const answer = response.choices[0].message.content;
    res.json({ answer });

  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "AI error occurred" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
