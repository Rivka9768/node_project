

import { DataService } from "../service/dataService.js";
export class CommentsController {

    async getCommentsByPostId(req, res, next) {

        try {
            const commentsService = new DataService();
            if (req.query.postId === undefined)
                throw new Error('illegal request')
            const resultItems = await commentsService.getByParam('comments', {key:'postId',value:req.query.postId});
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getCommentById(req, res, next) {
        try {
            const commentsService = new DataService();
            const resultItem = await commentsService.getById('comments', req.params.id);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async addComment(req, res, next) {
        try {
            const commentsService = new DataService();
            await commentsService.add('comments', req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteComment(req, res, next) {
        try {
            const commentsService = new DataService();
            await commentsService.delete('comments', req.params.id);
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

    async updateComment(req, res, next) {
        try {
            const commentsService = new DataService();
            await commentsService.update('comments', req.body, req.params.id);
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