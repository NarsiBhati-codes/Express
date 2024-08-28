const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

const FILE_PATH = path.join(__dirname, "TODO_LIST.JSON");

app.get("/showTodo", (req, res) => {
  fs.readFile(FILE_PATH, "utf-8", (err, TODO_LIST) => {
    if (err) {
      res.status(500).json({ error: "unable to load todo" });
      return;
    } else {
      TODO_LIST = JSON.parse(TODO_LIST);

      if (TODO_LIST.length == 0) {
        res.status(204).send();
      } else {
        res.status(200).json(TODO_LIST);
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port 3000 : ${PORT}`);
});
