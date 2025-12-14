// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection to the database
const con = mysql.createConnection({
  host: 'localhost',  // Your MySQL server host
  user: 'root',       // Your MySQL username
  password: '1234',       // Your MySQL password
  database: 'dsatrainer' // Your database name
});

module.exports = con;