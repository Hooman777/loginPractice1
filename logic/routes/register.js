const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const database = require(path.join(__dirname, '..', '..', 'model', 'database.js'));

router.use(bodyParser.urlencoded());

router.use('/api/register', (req, res) => {
    res.render('register.ejs', {"title": "Sign up!"});
});

module.exports = router;