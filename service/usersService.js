import { getUsersQuery, getUserByIdQuery, addUserQuery } from "./usersQueries.js"
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
        console.log(userItem.id)
        const queryUsers = addUserQuery();


        console.log("jhhhh")
        const { id,    name , username
            , email

            , street
            , suite
            , city
            , zipcode

            , lat
            , lng


            , phone
            , website

            , companyName
            , catchPhrase
            , bs }=userItem;
        const result = await executeQuery(queryUsers, [ id,    name , username
            , email

            , street
            , suite
            , city
            , zipcode

            , lat
            , lng


            , phone
            , website

            , companyName
            , catchPhrase
            , bs]);
        console.log("jjjj")
        return result;
    }
}

