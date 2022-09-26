import Task from "../models/Task.js";

class TaskController {
    static createTask(req, res) {
        res.render("task/create");
    }
}

export default TaskController;