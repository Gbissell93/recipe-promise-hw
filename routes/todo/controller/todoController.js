const Todo = require("../model/todo");

function getAllTodo(body) {
    return new Promise((resolve, reject) => {

        Todo.find({})
            .then(payload =>{
                resolve(payload);
            })
            .catch((error) => {
                reject(error)
            })


    })
}

function createNewTodo(body) {
    
    return new Promise((resolve, reject) => {
        const newTodo = new Todo ({
            todo: body.todo,
            completed: body.completed
        });

       newTodo.save()
       .then(payload => {
           resolve(payload);
       })
       .catch((error) => {
           reject(error)
       });
    }); 
}

function updateTodo(id, body) {
    
    return new Promise((resolve, reject) => {
        
       Todo.findByIdAndUpdate(id, body, {new: true})
       .then(payload => {
        resolve(payload);
    })
    .catch((error) => {
        reject(error)
    });
    }); 
}

function deleteTodo(id) {
    
    return new Promise((resolve, reject) => {
        
       Todo.findByIdAndDelete(id)
       .then(payload => {
        resolve(payload);
    })
    .catch((error) => {
        reject(error)
    });
    }); 
}

module.exports = {
    getAllTodo,
    createNewTodo,
    updateTodo,
    deleteTodo
}