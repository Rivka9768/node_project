import express from "express";
// import { TestController } from '../controllers/testController.js'
const usersRouter = express.Router();

const userscontroller = new TestController()

usersRouter.get("/:id", userscontroller.getTestById)
usersRouter.get("/", userscontroller.getTest)
usersRouter.post("/", userscontroller.addTest)
usersRouter.delete("/:id", userscontroller.deleteTest)
usersRouter.put("/:id", userscontroller.updateTest)

export {
    usersRouter
}