

const getUsersQuery = () => {
    const query = `SELECT * FROM nodeproject.users `;
    return query
}

const getUserByIdQuery = () => {
    const query = `SELECT * FROM nodeproject.users  where id = ?`;
    return query
}

const addUserQuery = () => {
    const query = `INSERT INTO nodeproject.users (id,name,username,email,street,city
        ,zipcode,phone,website) VALUES (?,?,?,?,?,?,?,?,?)`;
    return query
}

const deleteUserQuery = () => {
    const query = `DELETE FROM nodeproject.users WHERE (id = ?)`;
    return query
}

const updateUserQuery = () => {
    const query = `UPDATE nodeproject.users SET id = ?,name = ?,username = ?,email = ?,street = ?,city = ?
    ,zipcode = ?,phone = ?,website = ? WHERE (id = ?);`;
    return query
}
export {
    getUsersQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery
}