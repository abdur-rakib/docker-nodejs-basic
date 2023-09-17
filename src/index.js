const express = require("express");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Docker basic route!!!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port: ${process.env.PORT || 3000}`);
});
