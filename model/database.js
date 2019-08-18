const md5 = require("md5");
const path = require("path");
const model = require(path.join(__dirname, "model.js"));

// const database = [];
model.initialize();

const hash = password => md5(password + "salt!");

const addUser = (email, password) => {
  //   database.push({ id: hash(password), email: email });
  model.addUser("Hooman", email, hash(password));
};

exports.addUser = addUser;

const retrieveUser = (email, password, callback) => {
  model.retrieveUser(hash(password), email, callback);
};

exports.retrieveUser = retrieveUser;
