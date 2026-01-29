import express from "express";
import cors from "cors";

import subjectRouter from "./routes/subjects";

const app = express();
const PORT = 8000;

if (!process.env.FRONTEND_URL) {
    throw new Error("Missing frontend URL");
}

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json());

app.use('/api/subjects', subjectRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});