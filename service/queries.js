

const getQuery = (table,param) => {
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
export {
    getQuery, getByIdQuery, addQuery, deleteQuery, updateQuery
}