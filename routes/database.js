var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sitesoiree"
});

function connection(req) {
        con.query(req, function (err, result) {
            if (err) throw err;
            console.log("Connected!");
            console.log(result);
            console.log(result[0]);
    });
}
exports.connection = connection;
/*
function connection(req) {
    con.connect(function (err) {
        if (!err) {
            console.log("Connecté à la db ...");
            con.query(req, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            });
        } else {*/