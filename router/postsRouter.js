import express from "express";
import { PostsController } from "../controllers/postsController.js";
const postsRouter = express.Router();

const postscontroller = new PostsController()

postsRouter.get("/:id",postscontroller.getPostById)
postsRouter.get("/", postscontroller.getPostsByUserId)
postsRouter.post("/",postscontroller.addPost)
postsRouter.delete("/:id",postscontroller.deletePost)
postsRouter.put("/:id",postscontroller.updatePost)

export {
    postsRouter
}