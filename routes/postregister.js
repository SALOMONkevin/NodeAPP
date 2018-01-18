'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res) {
    const db = require('./dataBase');
    db.connection("INSERT INTO utilisateur (pseudo,mdp,prenom,nom,email) VALUES ('" + req.body.register_pseudo + "','" + req.body.register_password + "', '" + req.body.register_prenom + "', '" + req.body.register_nom + "','" + req.body.register_mail + "')");
    res.render('login.ejs');
});

module.exports = router;