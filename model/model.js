const sqlite3 = require("sqlite3").verbose();
const path = require("path");

let db = new sqlite3.Database(path.join(__dirname, "database", "db.sqlite"));

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

exports.addUser = (name, email, hash) => {
  db.run(`
  INSERT INTO User (Name, Email, Password) VALUES (?, ?, ?);  
  `, [name, email, hash], error => {
    if (error) {
      return console.error(error.message);
    }
  });
};

exports.retrieveUser = (hash, email, callback) => {
  db.get(`
  SELECT Id, Name, Email, Password FROM User WHERE Email = ? AND Password = ?;
  `, [email, hash], (error, row) => {
    if (error) {
        callback(false);
      return console.error(error.message);
    }

    if (row) {
        callback(true, row);
    } else {
        callback(false);
    }
  });
};
