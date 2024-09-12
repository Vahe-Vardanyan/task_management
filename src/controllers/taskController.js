import {
  addTaskServices,
  updateTaskStatusServices,
  getTaskDetailsServices,
  generateCompletionReportServices,
  generateTaskStatisticsServices,
} from "../services/taskService.js"; // Import service function

const createTask = (req, res) => {
  const taskData = req.body;
  const newTask = addTaskServices(taskData);
  res.status(201).json(newTask);
};

const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedTask = await updateTaskStatusServices(id, status);
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View task details
const getTaskDetails = async (req, res) => {
  try {
    console.log("ok");
    const { id } = req.params;
    const task = await getTaskDetailsServices(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Generate task completion report
const getCompletionReport = async (req, res) => {
  try {
    const { timePeriod, memberId } = req.query;
    const report = await generateCompletionReportServices(timePeriod, memberId);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Generate task statistics
const getTaskStatistics = async (req, res) => {
  try {
    const stats = await generateTaskStatisticsServices();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export {
  createTask,
  updateTaskStatus,
  getTaskDetails,
  getCompletionReport,
  getTaskStatistics,
};
