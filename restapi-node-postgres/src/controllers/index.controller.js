const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows); //para devolver un json a la pagina web con los datos de la query realizada
};

const getUserById = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const createUsers = async (req, res) => {
    const {name, email} = req.body;

    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'Usuario anadido con exito.',
        body: {
            user: {name, email}
        }
    })  
};


module.exports = {
    getUsers,
    getUserById,
    createUsers
}