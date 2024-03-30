async function query(query, params){
    let results;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: process.env.DB_NAME,
        password: process.env.PASSWORD
    });

    try {
        [results,] = await connection.execute(query,params);

    } catch (err) {
        console.log(err);
    }
    finally {
        connection.end();
    }
    return results;
}

export{
    query
}