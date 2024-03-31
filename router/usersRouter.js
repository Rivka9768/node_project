import express from "express";
import { UserController } from "../controllers/usersController.js";
const usersRouter = express.Router();

const userscontroller = new UserController()

usersRouter.get("/:id", userscontroller.getUserById)
usersRouter.get("/", userscontroller.getUsers)
// usersRouter.post("/", userscontroller.addTest)
// usersRouter.delete("/:id", userscontroller.deleteTest)
// usersRouter.put("/:id", userscontroller.updateTest)

export {
    usersRouter
}