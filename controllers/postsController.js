

import { Service } from "../service/services.js";
export class PostsController {

    async getPostsByUserId(req, res, next) {

        try {
            const postsService = new Service();
            if (req.query.userId === undefined)
                throw new Error('illegal request')
            const resultItems = await postsService.get('posts', {key:'userId',value:req.query.userId});
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getPostById(req, res, next) {
        try {
            const postsService = new Service();
            const resultItem = await postsService.getById('posts', req.params.id);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async addPost(req, res, next) {
        try {
            const postsService = new Service();
            await postsService.add('posts', req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deletePost(req, res, next) {
        try {
            const postsService = new Service();
            await postsService.delete('posts', req.params.id);
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

    async updatePost(req, res, next) {
        try {
            const postsService = new Service();
            await postsService.update('posts', req.body, req.params.id);
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