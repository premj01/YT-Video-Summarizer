const mysql = require('mysql')

//database credentials or details
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: '',
    database: process.env.DATABASE,
});
//database connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;