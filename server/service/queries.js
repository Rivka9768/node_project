
const getQuery = (table) => {
    const query = `SELECT * FROM nodeproject.${table} where ifnull(deactivated,0) = 0 `;
    return query
}
const getByParamQuery = (table,param,limit=Number.MAX_SAFE_INTEGER) => {
    const query = `SELECT * FROM nodeproject.${table} where ifnull(deactivated,0) = 0 and ${param}= ? limit ${limit} `;
    return query
}

const getByIdQuery = (table) => {
    const query = `SELECT * FROM nodeproject.${table}  where ifnull(deactivated,0) = 0 and id = ?`;
    return query
}

const addQuery = (table,columns) => {
    const columnsNames=Object.keys(columns);
    const query = `INSERT INTO nodeproject.${table} (${columnsNames.map((column)=>column)}) VALUES (${columnsNames.map((column)=>'?')})`;
    return query
}

const deleteQuery = (table) => {
    const query = `UPDATE nodeproject.${table} SET deactivated = 1 WHERE (id = ?)`;
    return query
}

const updateQuery = (table,columns) => {
    const columnsNames=Object.keys(columns);
    console.log(columnsNames)
    const query = `UPDATE nodeproject.${table} SET ${columnsNames.map((column)=>(column+'=?'))} WHERE (id = ?)`;
    return query
}

const checkQuery=()=>{
    const query = `SELECT userId FROM nodeproject.user_logins  where username = ? and password = ?`;
    return query
}


export {
    getQuery,getByParamQuery, getByIdQuery, addQuery, deleteQuery, updateQuery,checkQuery
}