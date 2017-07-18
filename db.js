var mysql = require ("mysql");
var con = mysql.createConnection ({
		host: "127.0.0.1",
		user: "root",
		password: "jays101",
		database: "Login"
});

module.exports = {

	checkDatabase: function (username, password, callback){
		/* 
		At the end of my function, I want to return
		the variable value to the user...
		*/

		con.connect (function(err){
			if (err) {
				callback(err, false); 
			}
			con.query(`SELECT * FROM login WHERE userName ='${username}'  AND password = '${password}'`, function (err, result){
				console.log(result);
				if(err) {
					callback("no username", false);
				}
				if(result.length === 0){
					callback("There is no record of that username/password combination",false);
				}
				else if (result[0].password === password ){
					console.log(result);
					callback(null, true);
				} // 
			})

			con.end();

	
			
		});

	},
	check: function (username, password, callback){

		con.query(`SELECT * FROM login WHERE userName ='${username}'  AND password = '${password}'`, function (err, result){
				console.log(result);
				if(err) {
					callback("no username", false);
				}
				if(result.length === 0){
					callback("There is no record of that username/password combination",false);
				}
				else if (result[0].password === password ){
					console.log(result);
					callback(null, true);
				} // 
		 })

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