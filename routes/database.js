var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sitesoiree"
});
function connection(req) {
    con.connect(function (err) {
        if (!err) {
            console.log("Connect� � la db ...");
            con.query(req, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            });
        } else {
            console.log("Probl�me de co � la db");
        }

    });
}
exports.connection = connection;