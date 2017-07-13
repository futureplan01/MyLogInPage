var mysql = require ("mysql");
var con = mysql.createConnection ({
		host: "127.0.0.1",
		user: "root",
		password: "jays101",
		database: "Login"
});

module.exports = {
	checkDatabase: function (username,password){
		con.connect(function(err){
			if(err) console.log("there was an error \n\n " + err);

			// No error
			console.log("connected to the db successfully");

			con.query(`SELECT * FROM login WHERE userName ='${username}'  AND password = '${password}'`, function (err, result){
				if(err) console.log("there was an error \n\n " + err);
				else console.log("success");
			})
		})
	},
	login: function (username, password){
		con.connect(function(err){
			if(err) throw err;

			con.query("SELECT * FROM login WHERE userName ='" + username +"'", function (err, result){
				if(err) console.log("there was an error \n\n " + err);
				else console.log("success");
			})
		})
	},
	insert: function (username, password){
		console.log("Inserting Into");
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


/*





		checkDatabase: function (username, password){
		con.connect (function(err){
			if (err) {
				console.log("Could not connect to Database");
				return false;
			}
			else{
			   	con.query(`SELECT * FROM login WHERE userName ='${username}'  AND password = '${password}'`, function (err, result){
			   		if(err){
			   			console.log("Something wrong with username/password");
			   		}
				    if(result[0].password === password ){
					 console.log("YOU ARE IN");
				    } // 
				    else{
					 console.log("There is no record of that username/password combination");
				    } 
			})
			console.log("Finished Checking!!")
			return true;
		}
		});
	}
*/
