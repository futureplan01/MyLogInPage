const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var path = require('path');
var router = express.Router();
var db = require("./db.js");
const port = 3000;

// Sets Engine to use ejs files
app.set('view engine', 'ejs');

// For Post Request
app.use(bodyParser.urlencoded({
	extended: false
}));

// uses static files
app.use(express.static(__dirname + '/views'));

app.get('/',function (req,res) {
	res.sendFile("index.html");
});

// Log in Page.....
app.post('/log_in',function (req, res){
	var user = req.body.userName;
	var password = req.body.passWord;
	if(db.checkDatabase(user,password)){ // what's happening here
		return res.redirect("/welcome");
	}else{
	//  
 	}
})

app.get('/welcome', function (req,res){
	res.sendFile(__dirname + "/views/welcome.html");
});

app.post('/signup',function (req, res){
	var user = req.body.userName;
	var user = req.body.passWord;
    console.log("Password: " + password + "\n UserName is: " + user);
    db.insert(user,password);
    return res.redirect("/welcome");
})

app.listen (port,function (err) {
	if(err){
		return console.log("no bueno");
	}
	console.log(`server is listening on ${port}`);
})


