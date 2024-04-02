

import { Service } from "../service/services.js";
export class TodosController {

    async getTodosByUserId(req, res, next) {

        try {
            const todosService = new Service();
            console.log(req.query.userId); 
            if(req.query.userId===undefined)
                throw new Error('illegal request')
            const resultItems = await todosService.getByParam('todos',{key:'userId',value:req.query.userId});
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getTodoById(req, res,next) {
        try {
            const todosService = new Service();
            const resultItem = await todosService.getById('todos',req.params.id);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async addTodo(req, res,next) {
        try {
            const todosService = new Service();
           await todosService.add('todos',req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteTodo(req, res,next) {
        try {
            const todosService = new Service();
            await todosService.delete('todos',req.params.id);
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

    async updateTodo(req, res,next) {
        try {
            const todosService = new Service();
            await todosService.update('todos',req.body,req.params.id);
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




}