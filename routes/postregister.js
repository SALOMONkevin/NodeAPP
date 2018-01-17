'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res) {
    const db = require('./dataBase');
    console.log(req.body.register_name);
    db.connection("INSERT INTO utilisateur (login, mdp, email,nom,prenom) VALUES ('" + req.body.register_name + "', '" + req.body.register_mdp + "', '" + req.body.register_email + "', 'test', 'test')");
    res.render('login.ejs');
});

module.exports = router;