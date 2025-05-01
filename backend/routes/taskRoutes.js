const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Retrieve all tasks
router.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// Create a new task
router.post("/api/task", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to create task", details: err.message });
  }
});

// Update a task by ID
router.put("/api/task/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: "Failed to update task" });
  }
});

// Delete a task by ID
router.delete("/api/task/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
