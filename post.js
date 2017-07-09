var firstButton = document.getElementsByTagName("button")[0];
var firstTextBox = document.getElementsByTagName("input")[0];
var secondTextBox = document.getElementsByClassName("box")[1];
// var register = require("./register.js");


// if the fil
firstButton.onclick = function (err){
	var username = firstTextBox.value;
	var password = secondTextBox.value;
	if(username === "" || password === ""){
		alert("Please Enter A Email Address and Password");
	}else{
		var buttonName = firstButton.name;
		if(buttonName === "Log in"){
			// register.checkDatabase(username,password);

			
		}else{
			// register.insert(username,password);
			
		}
	}
}