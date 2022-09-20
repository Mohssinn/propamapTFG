const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'library'
}

const pool = new Pool(config);

const getBooks = async () => {
    try {
        const res = await pool.query('select * from books');
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const insertUser = async () => {
    const text = 'INSERT INTO  users(username, password) VALUES($1, $2)'
    const values = ['john', 'john123']

    const res = await pool.query(text, values);
    console.log(res);
    pool.end();
}
insertUser();