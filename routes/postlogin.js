'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res) {
    const db = require('./dataBase');
    console.log(req.body.register_name);
    var result = db.connection("select * from utilisateur where '" + req.body.login_mail + "' = email and mdp='"+req.body.login_password+"'");
    console.log(result[0].mdp);
        res.render('test.ejs');
    
});

module.exports = router;