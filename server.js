require('dotenv').config();

const userLib = require("./backend/lib/userLib");
const todoLib = require("./backend/lib/todoLib");
const mongoose=require("mongoose");
const port = process.env.PORT || 5050;

const express = require('express');
const app = express();

//whatwver front end sends to us it will put it express.json!
app.use(express.json());
app.use(express.static("public"));

//function(request,response)
app.get("/card", function(req, res){
	//res.send("I am Shreya");
	res.sendFile(__dirname+"/card.html")
});

app.get("/todo", function(req, res){
	//res.send("I am Shreya");
	res.sendFile(__dirname+"/public/todo.html")
});

/*app.get("/api/todos", function(req, res){
	todoLib.getAllTodos(function(err,todos){
       if(err){
		   res.json({status: "error",message:err,data:null});
	   }
	   else{
		res.json({status :"success",data:todos});
	   }
	});
});

app.post("/api/todos",function(req,res){
    const todo = req.body;
	todoLib.createTodo(todo,function(err,dbtodo){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
		 res.json({status :"success",data: dbtodo});
		}
	});
});
app.put("/api/todos/:todoId",function(req,res){
	const todo = req.body;
	const todoid = req.params.todoId;
	todoLib.updateTodoById(todoid,todo,function(err,result){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
		 res.json({status :"success",data: result});
		}
	});
});

app.delete("/api/todos/:todoId",function(req,res){
	const todoid = req.params.todoId;
	todoLib.deleteTodoById(todoid,function(err,result){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
		 res.json({status :"success",data: result});
		}
	});
});*/
app.get("/api/todos",function(req,res){
	todoLib.getAllTodos(function(err,todos){
		if(err){
			res.json({status : "error", message : err, data : null});
		}
		else{
			res.json({status : "success", data : todos});
		}	
	});
});

app.post("/api/todos", function(req,res){
	const todo = req.body;
	todoLib.createTodo(todo, function(err,dbtodo){
		if(err){
			res.json({status : "error", message : err, data : null});
		}
		else{
			res.json({status : "success", data : dbtodo});
		}
	});
});

app.put("/api/todos/:todoid",function(req,res){
	const todo = req.body;
	const todoid = req.params.todoid;
	todoLib.updateTodoById(todoid,todo,function(err,dbtodo){
		if(err){
			res.json({status : "error", message : err, data : null});
		}
		else{
			res.json({status : "success", data : dbtodo});
		}
	});
});

app.delete(("/api/todos/:todoid"),function(req,res){
	const todoid = req.params.todoid;
	todoLib.deleteTodoById(todoid, function(err,dbtodo){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
			res.json({status: "success", data: dbtodo});
		}
	});
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
		/*userLib.deleteUser("YadaShreya",function(err,result)
		{
			if(err)
			{
				console.error(err);
			}
			else{
				console.log(result);
			}
		});*/
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


