

exports.addUserToDataBase = function (){

var mysql = require("mysql");

// Ah should hash my password 

var con = mysql.createConnection ({
	host: "127.0.0.1",
	user: "newuser",
	password: "password",
	database: "Login"
});

// alot i still have to learn....

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
