const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

let TODO = [];

// Create a new TODO
app.post("/createTodo", (req, res) => {
  const { id, task } = req.body;
  if (id && task) {
    TODO.push({ id, task });
    res.status(201).json({ message: "TODO created successfully!" });
  } else {
    res.status(400).json({ error: "Invalid input" });
  }
});

// Get all TODOs
app.get("/getTodo", (req, res) => {
  res.status(200).json(TODO);
});

// Update a TODO by ID
app.put("/updateTodo", (req, res) => {
  const { id, task } = req.body;
  const todo = TODO.find((t) => t.id === id);
  if (todo) {
    todo.task = task;
    res.status(200).json({ message: "TODO updated successfully!" });
  } else {
    res.status(404).json({ error: "TODO not found" });
  }
});

// Delete a TODO by ID
app.delete("/deleteTodo", (req, res) => {
  const { id } = req.body;
  const index = TODO.findIndex((t) => t.id === id);
  if (index !== -1) {
    TODO.splice(index, 1);
    res.status(200).json({ message: "TODO deleted successfully!" });
  } else {
    res.status(404).json({ error: "TODO not found" });
  }
});

app.listen(port, () => {
  console.log(`Express server is listening on port: ${port}`);
});
