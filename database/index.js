const mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'mvp'
})

db.connect((err) => {
  if (err) {
    console.log('No connection to DB');
  } else {
    console.log('Connected to MVP database');
  }
})

module.exports = db;