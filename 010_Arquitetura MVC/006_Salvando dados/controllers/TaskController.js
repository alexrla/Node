import Task from "../models/Task.js";

class TaskController {
    static createTask(req, res) {

        res.render("tasks/create");

    }

    // Vamos querer esperar essa operação, para podermos fazer outra coisa
    static async createTaskSave(req, res) {

        const task = {

            title: req.body.title,
            description: req.body.description,
            done: false

        };

        // Salvando a tarefa
        // Solicitamos o model, para criar uma interação com o banco
        await Task.create (task);

        res.redirect("/tasks");

    }

    static showTasks(req, res) {

        res.render("tasks/all");

    }
}

export default TaskController;