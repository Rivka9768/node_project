

import { UsersService } from "../service/usersService.js";
export class UserController {

    async getUsers(req, res, next) {
        try {

            const usersService = new UsersService();
            const resultItems = await usersService.getUsers();
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            // next(err)
        }
    }

    async getUserById(req, res) {
        try {
            const usersService = new UsersService();
            const resultItem = await usersService.getUserById(req.params.id);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            // next(err)
        }
    }


    async addUser(req, res) {
        try {
            const usersService = new UsersService();
           await usersService.addUser(req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            // next(err)
        }
    }


    async deleteUser(req, res) {
        try {
            const usersService = new UsersService();
            await usersService.deleteUser(req.params.id);
             res.status(200).json({ status: 200 });
            // console.log("test");
            // console.log(req.params.id);
            // res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            // next(err)
        }
    }

    async updateUser(req, res) {
        try {
            const usersService = new UsersService();
            await usersService.updateUser(req.body,req.params.id);
             res.status(200).json({ status: 200 })
            // console.log("test");
            // console.log(req.params.id);
            // console.log(req.body);
            // res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            // next(err)
        }
    }




}