// I need to make sure the error is also 

module.exports = function (userName, password){
	var mysql = require("mysql");

	var con = mysql.createConnection ({
	host: "127.0.0.1",
	user: "newuser",
	password: "password",
	database: "Login"
});


	con.connect(function(err){
		if(err) throw err;
		console.log("Connected!");
		var sql = "INSERT INTO login (userName, password) VALUES ('" + userName +"', '" + password + "')";
 	});

}





con.connect(function (err){
	if (err) throw err;
	console.log("Connected!");
	var sql = "INSERT INTO login (userName, password) VALUES ('j_pray','jays101')"
	con.query(sql,function (err,result){
		if(err.message.includes("ER_DUP_ENTRY")){
			console.log("Username already exist, please try again");
		}else{
			console.log("THE DATA HAS BEEN DATE YAH BISHES");
		}
	});
})
};
