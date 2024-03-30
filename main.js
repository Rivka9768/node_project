import express from 'express';


const server = express();
server.use(express.json());
server.use('/users',usersRouter);
server.use('/todos',todosRouter);
server.use('/posts',postsRouter);
server.use('/comments',commentsRouter);
// import {logErrors} from './middleware/logError.js'



server.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", 8080);
});