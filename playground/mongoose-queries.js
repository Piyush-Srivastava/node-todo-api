

const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo'); 
var {User} = require('./../server/models/user');

 var id = '5aad778ee8220a4e05a589ab';

// if(!ObjectID.isValid(id)){
//     console.log('Invalid id');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo',todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }

    console.log('User',user);
}).catch((e) => {
    console.log(e);
});