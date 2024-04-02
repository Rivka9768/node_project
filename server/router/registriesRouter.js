import express from "express";
import { RegistriesController } from "../controllers/registriesController.js";
const registriesRouter = express.Router();

const registriescontroller = new RegistriesController()

registriesRouter.post("/",registriescontroller.checkRegistries);
registriesRouter.get("/",registriescontroller.getRegistries);
export {
    registriesRouter
}