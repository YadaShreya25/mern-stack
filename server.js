require('dotenv').config();
const userLib = require("./backend/lib/userLib");
const mongoose=require("mongoose");


const express = require('express');
const app = express();
app.use(express.static("public"));
const port = process.env.PORT || 5050;

app.get("/card", function(req, res){
	//res.send("I am Shreya");
	res.sendFile(__dirname+"/card.html")
});


app.get("/weather", function(req, res){
	//res.send("I am Shreya");
	res.sendFile(__dirname+"/weather.html")
});

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
		/*userLib.getAllUsers(function(err,output){
			if(err)
			{
				console.error(err);
			}
			else
			{
				 console.log(output);
			}
		})*/
		/*userLib.createFirstUser(function(err,output){
			if(err)
			{
				console.error(err);
			}
			else
			{
				 console.log(output);
			}
		});*/
		/*userLib.updateUser(function(err,result){
			if(err)
			{
				console.error(err);
			}
			else{
				console.log(result);
			}
		});*/
		userLib.deleteUser("YadaShreya",function(err,result)
		{
			if(err)
			{
				console.error(err);
			}
			else{
				console.log(result);
			}
		});
		/*userLib.getUserByFilter({userName : "YadaShreya"},function(err,result){
			if(err){
				console.error(err);
			}
			else{
				console.log(result);
			}
		});*/
		/*userLib.createUser({userName: "Ramu",yearOfGraduation:2023},function(err,result){
			if(err){
				console.error(err);
			}
			else{
				console.log(result);
			}
		});*/
        app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});


