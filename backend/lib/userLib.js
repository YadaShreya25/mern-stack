//const userModel = require("../models/userModel");

import userModel from "../models/userModel.js";
export async function getAllUsers(callback)
{
    try{
        var users = await userModel.find({isDeleted : false});
        callback(null,users);
    }
    catch(err){
        callback(err,null);
    }
}

export async function createFirstUser(callback)
{
    try{
        var user = {
            userName:"YadaShreya",
            yearOfGraduation:"2024",
        };
        var newUser= new userModel(user);
        var result = await newUser.save();
       callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

export async function updateUser(username,data,callback){
    try{
        var query= {
            userName : username,
        };
        var result = await userModel.updateOne(query,data);
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

// deleting the user by using username
export async function deleteUser(username,callback){
    try{
        var query= {
            userName : username,
        };
        var result = await userModel.deleteOne(query,{isDeleted : true});
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

export const getUserByFilter = async function(filter,callback)
{
    try{
        var users = await userModel.findOne(filter);
        callback(null,users);
    }
    catch(err){
        callback(err,null);
    }
}

export const createUser = async function(user,callback)
{
    try{
        
        var newUser= new userModel(user);
        var result = await newUser.save();
       callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}