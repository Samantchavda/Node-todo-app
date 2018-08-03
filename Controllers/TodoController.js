
//static data

var data = [{ item: 'Check Mail' }, { item: 'Check Task' }, { item: 'Get Tea' }];
module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('todos', { todos: data });
    });

    app.post('/todo', function (req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:itemname', function (req, res) {
        data = data.filter(function(todo){
            return todo.item.replace(/ /g , '-') !== req.params.itemname;
        });
        res.json(data);
    });
}


// With mongo Db

//var mongoose = require('mongoose');

//// connect to database
// mongoose.connect('<DB Name>' ,{ useNewUrlParser: true });


// //create schema - like blurprint
// var todoSchema = new mongoose.Schema({
//     item: String
// });

// var Todo = mongoose.model('Todo', todoSchema);

// module.exports = function (app) {
//     app.get('/todo', function (req, res) {
//         Todo.find({}, function (error, data) {
//             if (error) throw error;
//             res.render('todos', { todos: data });
//         });
//     });

//     app.post('/todo', function (req, res) {
//         Todo(req.body).save(function (err ,data) {
//             if (err) throw err;
//             res.json(data);
//         });
//     });

//     app.delete('/todo/:itemname', function (req, res) {
//         Todo.find({item : req.params.itemname.replace(/\-/g, ' ') }).remove(function (err ,data) {
//             if (err) throw err;
//             res.json(data);
//         });
//     });
// }