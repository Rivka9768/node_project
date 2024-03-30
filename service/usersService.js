import { getUsersQuery,getUserByIdQuery } from "./usersQueries.js"

export class UsersService {

    async getUsers() {
        const queryUsers = getUsersQuery();
        const result = await executeQuery(queryUsers);
        return result;
    }

    async getUsersById(id) {
        const queryUsers = getUserByIdQuery();
        const result =  await executeQuery(queryUsers, [id]);
        return result;
    }

    async addTest(testItem) {
        // call db add item

    }
}

