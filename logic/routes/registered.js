const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const database = require(path.join(__dirname, '..', '..', 'model', 'database.js'));

router.use(bodyParser.urlencoded());

router.use('/api/registered', (req, res) => {
    res.render('index.ejs', {"title": "Already signed up!", "message": "You are already signed up."});
    database.addUser(req.body.email, req.body.password);
    console.log("request is: ", req.body);
});

module.exports = router;