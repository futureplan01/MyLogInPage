const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var path = require('path');
var router = express.Router();
var db = require("./db.js");
const port = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static("views"))
app.get('/',function (req,res) {
	//res.send("WHats uppppppp"); 
 var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';

 res.send(html);
});
app.post('/',function (req, res){
	console.log(req.body.userName); // undefined... 
})

app.listen (port,function (err) {
	if(err){
		return console.log("no bueno");
	}
	console.log(`server is listening on ${port}`);
})


