import express from "express";
import dotenv from "dotenv";
import connectToDB from "./utils/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
connectToDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Define your routes
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Use named export
export { app };
