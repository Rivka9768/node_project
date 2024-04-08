import { executeQuery } from './db.js'
import { checkQuery } from './queries.js';
export class LoginService {

    async check(userItem) {
        const query = checkQuery();
        const hash = await bcrypt.hash(userItem.password, 10);
        userItem.password = hash;
        const result = await executeQuery(query, [...Object.values(userItem)]);
        return result;
    }

}

