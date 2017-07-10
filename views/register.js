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
			con.query(`SELECT * FROM login WHERE userName ='${username}'`, function (err, result){
				if(err) throw err;
				console.log(result);
			})
		});
	},

	insert: function (username, password){
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