

const getUsersQuery = () => {
    const query = `SELECT * FROM nodeproject.users `;
    return query
}

const getUserByIdQuery = () => {
    const query = `SELECT * FROM nodeproject.users  where id = ?`;
    return query
}

const addUserQuery = (table,columns) => {
    // const query = `INSERT INTO nodeproject.users (id,name,username,email,street,city
    //     ,zipcode,phone,website) VALUES (?,?,?,?,?,?,?,?,?)`;
    // return query
    const columnsNames=Object.keys(columns);
    const query = `INSERT INTO nodeproject.${table} (${columnsNames.map((column,index)=>column)}) VALUES (${columnsNames.map((column,index)=>'?')})`;
    return query
}

const deleteUserQuery = () => {
    const query = `DELETE FROM nodeproject.users WHERE (id = ?)`;
    return query
}

const updateUserQuery = (table,columns) => {
    // const query = `UPDATE nodeproject.users SET id = ?,name = ?,username = ?,email = ?,street = ?,city = ?
    // ,zipcode = ?,phone = ?,website = ? WHERE (id = ?);`;
    // return query
    const columnsNames=Object.keys(columns);
    const query = `UPDATE nodeproject.${table} SET ${columnsNames.map((column)=>(column+'=?'))} WHERE (id = ?)`;
    return query
}
export {
    getUsersQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery
}