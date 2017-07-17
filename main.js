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

// Which page goes t
app.get('/login',function (req, res){
	res.render(__dirname + "/views/login.ejs");
})

// Log in Page.....
app.post('/login',function (req, res){
	var user = req.body.userName;
	var password = req.body.passWord;

	db.checkDatabase(user,password, function (err,val){
		if(err){ 

			console.log("Main: " + err);
		}

		console.log("MAIN: " + val);

		if(val){
			res.sendFile(__dirname + "/views/welcome.html");
		}else{
			res.render("login", {Error: false});
		}
    });

});
app.get('/welcome', function (req,res){
	res.sendFile(__dirname + "/views/welcome.html");
});


app.get('/signup',function (req, res){

})
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


