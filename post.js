var firstButton = document.getElementsByTagName("button")[0];
var firstTextBox = document.getElementsByTagName("input")[0];
var secondTextBox = document.getElementsByClassName("box")[1];
var mysql_newuser = require("./register.js");


firstButton.onclick = function (err){
	var user = firstTextBox.value;
	var password = secondTextBox.value;
	if(user === "" || password = ""){
		alert("Please Enter A Email Address and Password");
	}else{
			
		// Get into the index.js file
		window.location.href = "https://www.google.com.jm/?gfe_rd=cr&ei=OkhdWc66COydXqS2mLAE";
	}
}