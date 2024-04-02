import { getQuery, getByIdQuery, addQuery, deleteQuery, updateQuery,checkQuery } from "./queries.js"
import { executeQuery } from './db.js'
export class Service {

    async get(table,param) {
        const query  = getQuery(table,param.key);
        const result = await executeQuery(query,[param.value] );
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

    async check(userItem) {
        const query  = checkQuery();
        const result = await executeQuery(query , [...Object.values(userItem)]);
        return result;
    }
}

