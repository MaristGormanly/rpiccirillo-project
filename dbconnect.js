var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pickles29",
  database: "topTenOregonTrail"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM topten", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
