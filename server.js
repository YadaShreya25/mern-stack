require('dotenv').config();
const userLib = require("./backend/lib/userLib");
const mongoose=require("mongoose");


const express = require('express');
const app = express();
const port = process.env.PORT || 5050;

app.get("/", function(req, res){
	//res.send("I am Shreya");
	res.sendFile(__dirname+"/index.html")
});

app.get("/resume", function(req, res){
	//res.send("I am Shreya");
	res.sendFile(__dirname+"/resume.html")
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
    if(err)
	{
		console.error(err);
	}
	else{
		console.log("DB connected");
		userLib.createFirstUser(function(err,res)
		{
			if(err)
			{
				console.error(err);
			}
			else{
				console.log(res);
			}
		});
        app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});


