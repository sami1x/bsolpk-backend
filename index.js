import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to the Express server!");
});

app.post("/auth", (req, res) => {
  console.log(req.body);
  if (req.body.role === "admin") {
    const adminusername = "admin@email.com";
    const adminpassword = "admin123";
    if (
      req.body.username === adminusername &&
      req.body.password === adminpassword
    ) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } else if (req.body.role === "teacher") {
    const teacherusername = "teacher@email.com";
    const teacherpassword = "teacher123";
    if (
      req.body.username === teacherusername &&
      req.body.password === teacherpassword
    ) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } else if (req.body.role === "student") {
    const studentusername = "student@email.com";
    const studentpassword = "student123";
    if (
      req.body.username === studentusername &&
      req.body.password === studentpassword
    ) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    return res.status(400).json({ error: "Some internal error occured" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
