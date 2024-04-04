import express from "express";
import { User_loginsController } from "../controllers/user_loginsController.js";
const user_loginsRouter = express.Router();

const user_loginsController = new User_loginsController()

user_loginsRouter.post("/",user_loginsController.checkUser_logins);
user_loginsRouter.get("/",user_loginsController.getUser_logins);
export {
    user_loginsRouter
}