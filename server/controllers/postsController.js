

import { query } from "express";
import { DataService } from "../service/dataService.js";
export class PostsController {

    async getPosts(req, res, next) {

        try {
            const postsService = new DataService();
            let resultItems=[];
            if (req.query.userId === undefined){
                resultItems = await postsService.get('posts',{orderBy:req.query._sort,limit:req.query._limit});
            }
            else{
                resultItems = await postsService.getByParam('posts', {key:'userId',value:req.query.userId,orderBy:req.query._sort,limit:req.query._limit});
            }
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
            const postsService = new DataService();
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
            const postsService = new DataService();
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
            const postsService = new DataService();
            await postsService.delete('posts', req.params.id);
            res.status(200).json({ status: 200 });
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
            const postsService = new DataService();
            await postsService.update('posts', req.body, req.params.id);
            res.status(200).json({ status: 200 })
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }




}