const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my docker app");
});

app.listen(8080, () => {
  console.log("listening");
});
