import { getUsersQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery } from "./usersQueries.js"
import { executeQuery } from './db.js'
export class UsersService {

    async getUsers() {
        const queryUsers = getUsersQuery();
        const result = await executeQuery(queryUsers);
        return result;
    }

    async getUserById(id) {
        const queryUsers = getUserByIdQuery();
        const result = await executeQuery(queryUsers, [id]);
        return result;
    }

    async addUser(userItem) {
        const queryUsers = addUserQuery();
        const result = await executeQuery(queryUsers, [...Object.values(userItem)]);
        return result;
    }
    async deleteUser(id) {
        const queryUsers = deleteUserQuery();
        const result = await executeQuery(queryUsers, [id]);
        return result;
    }

    async updateUser(userItem, userId) {
        const queryUsers = updateUserQuery();
        const result = await executeQuery(queryUsers, [...Object.values(userItem), userId]);
        return result;
    }
}

