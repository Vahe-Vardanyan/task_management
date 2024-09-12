import TaskModel from "../models/taskModel.js";
// const mongoose = require("mongoose");

const tasks = []; // In-memory task storage for demonstration

const addTaskServices = async (taskData) => {
  const newTask = new TaskModel(taskData);
  await newTask.save();
  return newTask;
};

const updateTaskStatusServices = async (taskId, status) => {
  const task = await TaskModel.findById(taskId);
  if (!task) {
    return null;
  }
  task.status = status;
  return await task.save();
};

const getTaskDetailsServices = async (taskId) => {
  return await TaskModel.findById(taskId);
};

// Service to generate completion report
const generateCompletionReportServices = async (timePeriod, memberId) => {
  // Logic to generate a report based on time period or member
  const query = {};
  if (timePeriod) {
    // Assume timePeriod is a range in the format "startDate,endDate"
    const [startDate, endDate] = timePeriod.split(",");
    query.completedAt = { $gte: new Date(startDate), $lte: new Date(endDate) };
  }
  if (memberId) {
    query.assignedMember = memberId;
  }

  const completedTasks = await TaskModel.find({
    status: "completed",
    ...query,
  });
  return {
    count: completedTasks.length,
    tasks: completedTasks,
  };
};

// Service to generate task statistics
const generateTaskStatisticsServices = async () => {
  const completedTasks = await TaskModel.find({ status: "completed" });
  const totalTasks = completedTasks.length;

  const totalCompletionTime = completedTasks.reduce((acc, task) => {
    const timeTaken =
      (new Date(task.completedAt) - new Date(task.createdAt)) /
      (1000 * 60 * 60 * 24); // Time in days
    return acc + timeTaken;
  }, 0);

  const averageTimeToComplete =
    totalTasks > 0 ? totalCompletionTime / totalTasks : 0;

  return {
    totalTasksCompleted: totalTasks,
    averageTimeToComplete: averageTimeToComplete.toFixed(2),
  };
};
export {
  addTaskServices,
  updateTaskStatusServices,
  getTaskDetailsServices,
  generateCompletionReportServices,
  generateTaskStatisticsServices,
};
