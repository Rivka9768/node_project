const getUsersQuery=()=> {
    const query = `SELECT * FROM db_users.test `;
    return query
}

const getUserByIdQuery=()=> {
    const query = `SELECT * FROM db_users.test  where id = ?`;
    return query
}


export {
    getUsersQuery, getUserByIdQuery
}