const pool = require('../utils/db');

const GetAllbooks = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM Products");
        res.render('pages/index.ejs', { books: rows }); 
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    GetAllbooks
};
