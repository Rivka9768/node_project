

const getUsersQuery=()=> {
    const query = `SELECT * FROM nodeproject.users `;
    return query
}

const getUserByIdQuery=()=> {
    const query = `SELECT * FROM nodeproject.users  where id = ?`;
    return query
}


export {
    getUsersQuery, getUserByIdQuery
}