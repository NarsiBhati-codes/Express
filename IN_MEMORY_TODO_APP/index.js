const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello World from Get");
});

app.get("/Hii", (req, res) => {
  res.send("hii from Hii route");
});

app.listen(3000, () => {
  console.log("Express server is listening on port: 3000");
});
