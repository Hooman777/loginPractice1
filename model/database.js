const md5 = require("md5");
const path = require("path");
const model = require(path.join(__dirname, "model.js"));

// const database = [];
model.initialize();

const assignID = password => md5(password + "salt!");

const addUser = (email, password) => {
  //   database.push({ id: assignID(password), email: email });
  model.addUser(assignID(password), email);
};

exports.addUser = addUser;

const retrieveUser = (email, password) => {
  //   var test = false;
  //   const testID = assignID(password).toString();
  //   database.forEach(element => {
  //     test = element.id == testID && email == element.email;
  //   });
  //   return test;

  const test = model.retrieveUser(assignID(password), email);
  console.log("test is : ", test);
  return test == email;
};

exports.retrieveUser = retrieveUser;
