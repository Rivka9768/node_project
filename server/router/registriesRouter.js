import express from "express";
import { RegistriesController } from "../controllers/registriesController.js";
const registriesRouter = express.Router();

const registriescontroller = new RegistriesController()

registriesRouter.post("/",registriescontroller.checkRegistries);

export {
    registriesRouter
}