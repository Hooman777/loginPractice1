const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded());

router.use('/api/login', (req, res) => {
    res.render('login.ejs', {"title": "login"});

});

module.exports = router;