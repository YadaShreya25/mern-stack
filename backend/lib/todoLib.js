//const { default: mongoose } = require("mongoose");
//const todoModel = require("../models/todoModel");
import mongoose from "mongoose";
import todoModel from "../models/todoModel.js";
/*export const getAllTodos = async function(callback)
{
    try{
        var users = await todoModel.find({isCompleted:false,isDeleted : false});
        callback(null,users);
    }
    catch(err){
        callback(err,null);
    }
}

export const getTodosByQuery= async function(query,callback)
{
    try{
        var todos = await todoModel.find(query);
        callback(null,todos);
    }
    catch(err){
        callback(err,null);
    }
}

export const getSingleTodoById= async function(name,callback)
{
    try{
        var todo = await todoModel.findOne(name);
        callback(null,todo);
    }
    catch(err){
        callback(err,null);
    }
}

export const createTodo = async function(todo,callback)
{
    try{
        var newUser= new todoModel(todo);
        var result = await newUser.save();
       callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

export const updateTodoById = async function(name,data,callback){
    try{
        var query= {
            title : name,
        };
        var result = await todoModel.updateOne(query,data);
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

export const deleteTodoById = async function(name,callback){
    try{
        var todo= {
            title : name,
        };
        var result = await todoModel.updateOne(todo,{isDeleted : true});
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}*/


//const todoModel = require("../models/todoModel");

/*
1. createTodo
2. getAllTodos
3. getSingleTodoById
4. getTodosByQuery
5. updateTodoById
6. DeleteTodoById
*/

export const createTodo = async function(todo,callback){
    try{
        var newTodo = new todoModel(todo);
        var result = await newTodo.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
export const getAllTodos = async function(callback){
    try{
        var todos = await todoModel.find({isCompleted: false,isDeleted: false});
        callback(null,todos);
    }
    catch(err){
        callback(err,null);
    }
}

export const getTodosByQuery = async function(query,callback){
    try{
        var todos = await todoModel.find(query);
        callback(null,todos);
    }
    catch(err){
        callback(err,null);
    }
}

export const getSingleTodoById = async function(id,callback){
    try{
        var todo = await todoModel.findOne(id);
        callback(null,todo);
    }
    catch(err){
        callback(err,null);
    }
}

export const updateTodoById = async function(id,data,callback){
    try{
        var todo = {
            _id: new mongoose.Types.ObjectId(id),
        };
        var result = await todoModel.updateOne(todo,data);
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

export const deleteTodoById = async function(id,callback){
    try{
        var todo = {
            _id: id,
        };
        var result = await todoModel.updateOne(todo,{isDeleted: true});
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}


export const getAllCompletedTodos = async function(callback){
    try{
        var allComptodos = await todoModel.find({isCompleted : true,isDeleted : false});
        callback(null,allComptodos);
    }
    catch(err)
    {
        callback(err,null);
    }
}

export const getAllDeletedTodos = async function(callback){
    try{
        var alldeltodos = await todoModel.find({isDeleted : true});
        callback(null,alldeltodos);
    }
    catch(err)
    {
        callback(err,null);
    }
}



