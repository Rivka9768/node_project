import { getUsersQuery,getUserByIdQuery } from "./usersQueries.js"
import {executeQuery} from './db.js'
export class UsersService {

    async getUsers() {
        const queryUsers = getUsersQuery();
        const result = await executeQuery(queryUsers);
        return result;
    }

    async getUserById(id) {
        const queryUsers = getUserByIdQuery();
        const result =  await executeQuery(queryUsers, [id]);
        return result;
    }

    // async addTest(testItem) {
    //     // call db add item

    // }
}

