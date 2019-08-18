const md5 = require("md5");

const database = [];

const assignID = (password) => md5(password+'salt!');

const addUser = (email, password) => {
    database.push({id: assignID(password), email: email});
};

exports.addUser = addUser;

const retrieveUser = (email, password) => {
    var test = false;
    const testID = assignID(password).toString();
    database.forEach(element => {
        test = element.id == testID && email == element.email;
    });
    return test;
}

exports.retrieveUser = retrieveUser;
