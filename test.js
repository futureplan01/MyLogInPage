var db = require("./db.js");


db.check("j_pray","jays101", function (err, val){
	if(err) console.log(err);
	else {
		console.log("TESTING: " + val);
	}

})


