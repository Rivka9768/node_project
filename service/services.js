import { getQuery, getByIdQuery, addQuery, deleteQuery, updateQuery } from "./queries.js"
import { executeQuery } from './db.js'
export class Service {

    async get(table,userId) {
        const query  = getQuery(table);
        const result = await executeQuery(query,[userId] );
        return result;
    }

    async getById(table,id) {
        const query  = getByIdQuery(table);
        const result = await executeQuery(query , [id]);
        return result;
    }

    async add(table,userItem) {
        const query  = addQuery(table,userItem);
        const result = await executeQuery(query , [...Object.values(userItem)]);
        return result;
    }
    async delete(table,id) {
        const query  = deleteQuery(table);
        const result = await executeQuery(query , [id]);
        return result;
    }

    async update(table,userItem, userId) {
        const query  = updateQuery(table,userItem);
        const result = await executeQuery(query , [...Object.values(userItem), userId]);
        return result;
    }
}

