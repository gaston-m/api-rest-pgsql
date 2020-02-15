const ctrl = {};
const pool = require('../database');

ctrl.users = async (req, res) => {

    const users = await pool.query('SELECT * FROM users');

    res.json(users.rows);

}

ctrl.create = async (req, res) => {

    const { name, email } = req.body;

    const create = await pool.query('INSERT INTO users (name, email) values ($1, $2)', [name, email]);

    console.log(create);
    res.json({ status: 'User created'});
   
}

ctrl.getUser = async (req, res) => {

    const user = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);

    console.log(user.rows);
    res.json(user.rows);
}

ctrl.delete = async (req, res) => {
    
    const deleted = await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);

    console.log(deleted);
    res.json({ status: 'User Eliminado Correctamente!'});
}

ctrl.update = async (req, res) => {

    const { name, email } = req.body;
    const id = req.params.id;

    const updated = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [ name, email, id ]);

    console.log('updated');
    res.json({status: 'User Actualizado'})
}


module.exports = ctrl;