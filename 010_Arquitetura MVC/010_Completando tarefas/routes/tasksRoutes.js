import express from "express";

// Importando o controller
import TaskController from "../controllers/TaskController.js";

const router = express.Router();

router.get("/add", TaskController.createTask);
router.post("/add", TaskController.createTaskSave);
router.post("/remove", TaskController.removeTask);
router.get("/edit/:id", TaskController.updateTask);
router.post("/edit", TaskController.updateTaskPost)
router.post("/updatestatus", TaskController.toogleTaskStatus)
router.get("/", TaskController.showTasks);

export default router;