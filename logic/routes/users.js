const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const database = require(path.join(__dirname, '..', '..', 'model', 'database.js'));

router.use(bodyParser.urlencoded());

router.use('/api/users', (req, res) => {
    const result = database.retrieveUser(req.body.email, req.body.password);
    console.log("result is= ", result);
    if(result) res.render('users.ejs', {"title": "users", "email": req.body.email});
    else res.render('index.ejs', {'title': 'Error!!', 'message': 'Your email address or password was wrong!'});
});

module.exports = router;