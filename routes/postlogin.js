'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res) {
    const db = require('./dataBase');
    console.log(req.body.register_name);
    alert(db.connection("select * from utilisateur"));
    res.render('test.ejs');
});

module.exports = router;