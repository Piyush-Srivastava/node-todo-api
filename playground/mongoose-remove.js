const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo'); 
var {User} = require('./../server/models/user');

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5ab155123438c8602f231830').then((todo)=>{
    console.log(todo);
});
