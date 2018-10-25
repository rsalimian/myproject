var bodyParser = require('body-parser');
var todoModel = require('../models/todoModel');


module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', function(req, res) {

        todoModel.find({ username: req.params.uname }, function(err, result) {
            if (err) throw err;

            res.send(result);
        });
    });

    app.get('/api/todo/:id', function(req, res) {

        todoModel.findById(req.params.id, function(err, result) {
            if (err) throw err;

            res.send(result);
        });
    });

    app.post('/api/todo', function(req, res) {

        if (req.body.id) { // update

            todoModel.findByIdAndUpdate(req.body.id, {
                isDone: req.body.isDone,
                todo: req.body.todo,
                hasAttachment: req.body.hasAttachment
            }, function(err, result) {
                if (err) throw err;

                res.send(result);
            });

        } else { //insert

            var newTodo = todoModel({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save(function(err, result) {
                if (err) throw err;

                res.send(result);
            });
        }

    });

    app.delete('/api/todo', function(req, res) {

        todoModel.findByIdAndRemove(req.body.id, function(err, result) {
            if (err) throw err;

            res.send(result);
        });


    });

};