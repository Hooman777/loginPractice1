const sqlite3 = require("sqlite3").verbose();
const path = require("path");

let db = new sqlite3.Database(path.join(__dirname, "database", "users.db"));

exports.initialize = () => {
  db.run(
`CREATE TABLE IF NOT EXISTS "User" (
	"Id"	INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
	"Email"	TEXT,
	"Password"	TEXT,
	"Name"	TEXT
);`
    , error => {
    if (error) console.error(error.message);
  });
};

exports.addUser = (id, email) => {
  db.run(`
  INSERT INTO users (Id, Name, Email, Password) VALUES (?, ?, ?, ?);  
  `, [id, "Hooman", email, "734"], error => {
    if (error) {
      return console.error(error.message);
    }
  });
};

exports.retrieveUser = (email) => {
  db.get(`
  SELECT (Id, Name, Email, Password) FROM users WHERE Email = ?;
  `, [email], (error, row) => {
    if (error) {
      return console.error(error.message);
    }
    return row;
  });
};
