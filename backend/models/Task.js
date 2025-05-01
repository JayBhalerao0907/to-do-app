const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  assignedTo: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  dueDate: { type: Date, required: true },
  priority: { type: String, required: true, enum: ["Low", "Normal", "High"] },
  description: { type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
