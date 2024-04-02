
const getQuery = (table) => {
    const query = `SELECT * FROM nodeproject.${table} `;
    return query
}
const getByParamQuery = (table,param) => {
    const query = `SELECT * FROM nodeproject.${table} where ${param}= ?  `;
    return query
}

const getByIdQuery = (table) => {
    const query = `SELECT * FROM nodeproject.${table}  where id = ?`;
    return query
}

const addQuery = (table,columns) => {
    const columnsNames=Object.keys(columns);
    const query = `INSERT INTO nodeproject.${table} (${columnsNames.map((column)=>column)}) VALUES (${columnsNames.map((column)=>'?')})`;
    return query
}

const deleteQuery = (table) => {
    const query = `DELETE FROM nodeproject.${table} WHERE (id = ?)`;
    return query
}

const updateQuery = (table,columns) => {
    const columnsNames=Object.keys(columns);
    const query = `UPDATE nodeproject.${table} SET ${columnsNames.map((column)=>(column+'=?'))} WHERE (id = ?)`;
    return query
}

const checkQuery=()=>{
    const query = `SELECT * FROM nodeproject.registries  where username = ? and password = ?`;
    return query
}
export {
    getQuery,getByParamQuery, getByIdQuery, addQuery, deleteQuery, updateQuery,checkQuery
}