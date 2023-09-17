const express = require("express");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  console.log("Basic route hitted!!!");
  return res.json({ message: "Docker basic route!!!" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port: ${process.env.PORT || 3000}`);
});
