
import { DataService } from "../service/dataService.js";
import bcrypt from 'bcrypt'
const SALTROUNDS = 10;
export class User_loginsController {
    //post
    async checkUser_logins(req, res, next) {
        try {
            const user_loginsService = new DataService();
            const resultItem = await user_loginsService.getByParam('user_logins', { key: 'username', value: req.body.username });
            /////////////////////////////////////////////
            resultItem.length ?( bcrypt.compare(req.body.password, resultItem[0].password, function (err, result) {
                if (result == true){
                    console.log(result)
                    res.status(200).json(resultItem[0].userId);
                }
                   
                else{
                    console.log("gdszfghjgcx")
                    res.status(200).json(false);
                }
                   
            }))
                : res.status(200).json(false);
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
            const user_loginsService = new DataService();

            if (req.query.username === undefined)
                throw new Error('illegal request')
            let resultItems = await user_loginsService.getByParam('user_logins', { key: 'username', value: req.query.username });
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getHashedPassword(clearText) {
        return await bcrypt.hash(clearText, SALTROUNDS);
    }
}
