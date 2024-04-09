

import { DataService } from "../service/dataService.js";
const TABLE = 'users';
const SALTROUNDS =10;
import bcrypt from 'bcrypt'
export class UserController {

    // async getUsers(req, res, next) {
    //     try {

    //         const usersService = new UsersService();
    //         const resultItems = await usersService.getUsers();
    //         return res.status(200).json(resultItems);
    //     }
    //     catch (ex) {
    //         const err = {}
    //         err.statusCode = 500;
    //         err.message = ex;
    //         next(err)
    //     }
    // }

    async getUserById(req, res, next) {
        try {
            const usersService = new DataService();
            const resultItem = await usersService.getById(TABLE, req.params.id);
            res.status(200).json( resultItem );
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async addUser(req, res, next) {
        try {
            const usersService = new DataService();
            const { name, email, street, city, zipcode, phone, website, username, password } = req.body;
            const resultItem = await usersService.add(TABLE, {name, email, street, city, zipcode, phone, website });
            const userId= await resultItem.insertId;
            const pswd= await bcrypt.hash(password, SALTROUNDS);
            await usersService.add('user_logins', { userId:userId, username:username,password:pswd });
            res.status(200).json(userId);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteUser(req, res, next) {
        try {
            const usersService = new DataService();
            await usersService.delete(TABLE, req.params.id);
            res.status(200).json({ status: 200 });
            // console.log("test");
            // console.log(req.params.id);
            // res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async updateUser(req, res, next) {
        try {
            const usersService = new DataService();
            await usersService.update(TABLE, req.body, req.params.id);
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
            next(err)
        }
    }

    // async getHashedPassword(clearText) {
    //     return await bcrypt.hash(clearText, SALTROUNDS);
    // }


}