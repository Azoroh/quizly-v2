import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({});

app.post("/api/generate-quiz", async (req, res) => {
    try {
        const { inputText, questionCount = 15 } = req.body;

        if (!inputText || !inputText.trim()) {
            return res.status(400).json({ error: "No input text provided" });
        }

        const safeQuestionCount = Math.min(
            Math.max(Number(questionCount) || 15, 1),
            40
        );

        const prompt = `
You are generating quiz questions from study material.

Return ONLY valid JSON.
Do not wrap the response in markdown.
Do not add commentary.

Return this exact shape:
{
  "questions": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctOption": 0,
      "explanation": "string"
    }
  ]
}

Rules:
- Generate exactly ${safeQuestionCount} multiple choice questions.
- Every question must be based only on the study material below.
- Each question must have exactly 4 options.
- Only one option can be correct.
- "correctOption" must be a number from 0 to 3.
- Keep wording clear and concise.
- Avoid duplicate questions.
- Avoid vague or trick questions.

Study material:
${inputText}
`;

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
        });

        const rawText = response.text.trim();

        let parsed;
        try {
            parsed = JSON.parse(rawText);
        } catch {
            return res.status(500).json({
                error: "Model returned invalid JSON",
                raw: rawText,
            });
        }

        if (!parsed.questions || !Array.isArray(parsed.questions)) {
            return res.status(500).json({
                error: "Model returned an invalid quiz structure",
            });
        }

        return res.status(200).json(parsed);
    } catch (error) {
        console.error("Quiz generation failed:", error);
        return res.status(500).json({ error: "Failed to generate quiz" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});