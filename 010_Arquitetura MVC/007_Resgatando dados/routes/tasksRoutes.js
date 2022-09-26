import express from "express";

// Importando o controller
import TaskController from "../controllers/TaskController.js";

const router = express.Router();

router.get("/add", TaskController.createTask);
router.post("/add", TaskController.createTaskSave);
router.get("/", TaskController.showTasks);

export default router;