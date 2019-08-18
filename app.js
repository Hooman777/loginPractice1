const express = require("express");
const path = require('path');
const mainRouter = require(path.join(__dirname, 'logic', 'routes', 'main.js'));
const registerRouter = require(path.join(__dirname, 'logic', 'routes', 'register.js'));
const loginRouter = require(path.join(__dirname, 'logic', 'routes', 'login.js'));
const usersRouter = require(path.join(__dirname, 'logic', 'routes', 'users.js'));
const registeredRouter = require(path.join(__dirname, 'logic', 'routes', 'registered.js'));

app = express();

app.set('view engine', 'ejs');
app.set('views', 'website');

app.use(express.static(path.join(__dirname, 'public')));


app.use(registerRouter);
app.use(loginRouter);
app.use(usersRouter);
app.use(registeredRouter);
app.use(mainRouter);

app.listen(3400);