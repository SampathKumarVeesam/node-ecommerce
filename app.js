const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to My E-Commerce App 🚀");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});