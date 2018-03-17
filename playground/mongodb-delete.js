

const {MongoClient, ObjectID} = require('mongodb');


// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
//     if(err){
//         return console.log('Unable to connect to MongoDB');
//     }

//     console.log('Connected to MongoDB server');

//    //delete Many
// //    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
// //        console.log(result);
// //    });
      
//    //deleteOne
// //    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
// //        console.log(result);
// //    });

//     //find one and delete
//         db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//             console.log(result);
//    });
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Users').deleteMany({name: 'Piyush'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5aad159fa5481e8e8bec0251")}).then((result) =>{
        console.log(result);
    });

});