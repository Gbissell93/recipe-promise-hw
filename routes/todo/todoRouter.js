var express = require('express');
var router = express.Router();
const { getAllTodo, createNewTodo, updateTodo, deleteTodo } = require('./controller/todoController');

/* GET home page. */
router.get('/', function(req, res,) {
    getAllTodo({})
        .then(payload => {
            res.json({ message: "success", payload});
        },
        error => {
            res.status(500)
            .json({ message: "failure", error: error.message });
        }
        )
});

router.post("/add-new", function(req, res)  {
    createNewTodo(req.body)
        .then(payload => {
            res.json({ message: "success", payload})
        },
        error => {
            res.status(500)
            .json({ message: "failure", error: error.message})
        }
        ) 
})

router.put("/update/:id", function(req, res)  {
    updateTodo(req.params.id, req.body)
        .then(payload => {
            res.json({ message: "success", payload})
        },
        error => {
            res.status(500)
            .json({ message: "failure", error: error.message})
        }
        ) 
})

router.delete("/delete/:id", function(req, res)  {
    deleteTodo(req.params.id)
        .then(payload => {
            res.json({ message: "success", payload})
        },
        error => {
            res.status(500)
            .json({ message: "failure", error: error.message})
        }
        ) 
})

module.exports = router
