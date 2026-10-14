
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Cardspace backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`Cardspace API running on port ${PORT}`);
});
