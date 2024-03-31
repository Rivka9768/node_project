

const getUsersQuery=()=> {
    const query = `SELECT * FROM nodeproject.users `;
    return query
}

const getUserByIdQuery=()=> {
    const query = `SELECT * FROM nodeproject.users  where id = ?`;
    return query
}

const addUserQuery=()=> {
    const query =`INSERT INTO nodeproject.users (id,name,username,email,street,suite,city
        ,zipcode,lat,lng,phone,website,companyName,catchPhrase,bs) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    return query
}

export {
    getUsersQuery, getUserByIdQuery,addUserQuery
}