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
	extended: true
}));

// uses static files
app.use(express.static("views"))
app.get('/',function (req,res) {
	res.sendFile("index.html");
});

// Log in Page.....
app.post('/log_in.html',function (req, res){
	console.log("Getting this stuff to work"); // undefined... 
})

app.listen (port,function (err) {
	if(err){
		return console.log("no bueno");
	}
	console.log(`server is listening on ${port}`);
})
