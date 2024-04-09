
const getQuery = (table,orderBy,limit) => {
    const query = `SELECT * FROM nodeproject.${table} where ifnull(deactivated,0) = 0 ${orderBy?'order by '+ orderBy:''} ${limit?'limit '+ limit:''} `;
    return query
}
const getByParamQuery = (table,param,orderBy,limit) => {
    const query = `SELECT * FROM nodeproject.${table} where ifnull(deactivated,0) = 0 and ${param}= ? ${orderBy?'order by '+ orderBy:''} ${limit?'limit '+ limit:''} `;
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
    const query = `UPDATE nodeproject.${table} SET ${columnsNames.map((column)=>(column+'=?'))} WHERE (id = ?)`;
    return query
}


export {
    getQuery,getByParamQuery, getByIdQuery, addQuery, deleteQuery, updateQuery
}