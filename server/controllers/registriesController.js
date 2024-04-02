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

    async getRegistries(req, res, next) {
        try {
            const registriesService = new Service();
            
            if (req.query.username === undefined)
                throw new Error('illegal request')
             let   resultItems = await registriesService.getByParam('registries', {key:'username',value:req.query.username});
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}