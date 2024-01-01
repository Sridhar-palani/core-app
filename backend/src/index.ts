import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URL as string);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});
db.on("open", () => console.log("Connected to DB!!!!"));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "test api" });
});

app.listen(PORT, () => {
  console.log(
    `⚡️⚡️⚡️[server]: Server is running at https://localhost:${PORT} ⚡️⚡️⚡️`
  );
});
