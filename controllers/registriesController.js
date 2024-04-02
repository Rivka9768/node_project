import { Service } from "../service/services.js";

export class RegistriesController {
    async checkRegistries(req, res, next) {
        try {
            const registriesService = new Service();
            await registriesService.check(req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}