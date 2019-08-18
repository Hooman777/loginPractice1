const sqlite3 = require("sqlite3").verbose();
const path = require("path");

let db = new sqlite3.Database(path.join(__dirname, "database", "users.db"));

exports.initialize = () => {
  db.run("CREATE TABLE users (id VARCHAR(30), email VARCHAR(20));", error => {
    if (error) console.error(error.message);
  });
};

exports.addUser = (id, email) => {
  db.run("INSERT INTO users (id, email) VALUES (?, ?)", [id, email], error => {
    if (error) {
      return console.error(error.message);
    }
  });
};

exports.retrieveUser = (id, email) => {
  db.get("SELECT * FROM users", [id, email], (error, row) => {
    if (error) {
      return console.error(error.message);
    }
    return row;
  });
};
