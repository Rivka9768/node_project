import express from "express";
import  {TodosController}  from "../controllers/todosController.js";
const todosRouter = express.Router();

const todoscontroller = new TodosController()

todosRouter.get("/:id",todoscontroller.getTodoById)
todosRouter.get("/", todoscontroller.getTodosByUserId)
todosRouter.post("/", todoscontroller.addTodo)
todosRouter.delete("/:id", todoscontroller.deleteTodo)
todosRouter.patch("/:id", todoscontroller.updateTodo)

export {
    todosRouter
}