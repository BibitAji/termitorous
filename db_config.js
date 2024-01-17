var mysql = require('mysql');


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"itex_2024"
});

db.connect(function(error){
    if(error){
        console.error(error);
    } else {
        console.info("Connected to Database");
    }
});

module.exports = db;