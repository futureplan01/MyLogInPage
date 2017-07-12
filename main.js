const express = require("express");
const app = express();
var path = require('path');
var db = require("./db.js");
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static("views"))
app.get('/',function (req,res) {
	//res.send("WHats uppppppp"); 
	res.render('index', {user : "Great User"});
});
app.listen (port,function (err) {
	if(err){
		return console.log("no bueno");
	}
	console.log(`server is listening on ${port}`);
})