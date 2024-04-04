import { Service } from "../service/services.js";

export class User_loginsController {
    //post
    async checkUser_logins(req, res, next) {
        try {
            const user_loginsService = new Service();
            const resultItem = await user_loginsService.check(req.body);
            res.status(200).json(resultItem);//is it safe to return the data????
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
//get
    async getUser_logins(req, res, next) {
        try {
            const user_loginsService = new Service();
            
            if (req.query.username === undefined)
                throw new Error('illegal request')
             let   resultItems = await user_loginsService.getByParam('user_logins', {key:'username',value:req.query.username});
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