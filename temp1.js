// I need to make sure the error is also 

module.exports = function (userName, password){
	var mysql = require("mysql");

	var con = mysql.createConnection ({
	host: "127.0.0.1",
	user: userName,
	password: password,
	database: "Login"
});
	con.connect(function (err){
		if(err){
			throw err;
		}else{
			console.log("Got In");
		}
	});

}



