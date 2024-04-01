import express from 'express';
import { usersRouter } from './router/usersRouter.js';
import { todosRouter } from './router/todosRouter.js';
import { postsRouter } from './router/postsRouter.js';
import { commentsRouter } from './router/commentsRouter.js';
import {Errors} from './middleware/errors.js'
const server = express();
server.use(express.json());
server.use('/users',usersRouter);
server.use('/todos',todosRouter);
server.use('/posts',postsRouter);
server.use('/comments',commentsRouter);
server.use(Errors);




server.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", 8080);
});