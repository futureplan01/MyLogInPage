var mysql = require ("mysql");
var con = mysql.createConnection ({
		host: "127.0.0.1",
		user: "root",
		password: "jays101",
		database: "Login"
});

module.exports = {

	checkDatabase: function (username, password){
		con.connect (function(err){
			if (err) throw err;
			con.query(`SELECT * FROM login WHERE userName ='${username}'  AND password = '${password}'`, function (err, result){
				if(err) throw err;
				if(result[0].userName === username && result[0].password === password ){
					console.log("YOU ARE IN");
				} // 
				else{
					console.log("There is no record of that username/password combination");
				}
			})
		});
	},

	insert: function (username, password){
		console.log("YOOO");
		con.connect (function(err){
			if (err) throw err;
			console.log("Connected!");
			var sql = `INSERT INTO login (userName,password) VALUES (${username}, ${password})`;
			con.query(sql,function (err, result){
				if(err) throw err;
				console.log ("inserted");
			})
		});
	}


};