const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded());

router.use('/api', (req, res) => {
    res.render('index.ejs', {"title": "Welcome to my website!", "message": "Welcome to my website"});
   
});

module.exports = router;