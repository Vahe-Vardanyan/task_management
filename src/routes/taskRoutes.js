import express from "express";
import {
  createTask,
  updateTaskStatus,
  getTaskDetails,
  getCompletionReport,
  getTaskStatistics,
} from "../controllers/taskController.js"; // Import controller functions

const router = express.Router();

// Define routes
router.post("/createTask", createTask); // Route to create a task
router.patch("/updateTaskStatus/:id", updateTaskStatus); // Update task status
router.get("/getTaskById/:id", getTaskDetails); // Get task details
router.get("/reports/completion", getCompletionReport); // Get completion report
router.get("/reports/statistics", getTaskStatistics);

export default router; // Export router as default
