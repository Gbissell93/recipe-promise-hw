const Recipe = require("../model/recipe");

function getAllRecipe(body) {
    return new Promise((resolve, reject) => {

        Recipe.find({})
            .then(payload =>{
                resolve(payload);
            })
            .catch((error) => {
                reject(error)
            })


    })
}

function createNewRecipe(body) {
    
    return new Promise((resolve, reject) => {
        const newRecipe = new Recipe ({
            dish: body.dish,
            price: body.price
        });

       newRecipe.save()
       .then(payload => {
           resolve(payload);
       })
       .catch((error) => {
           reject(error)
       });
    }); 
}

function updateRecipe(id, body) {
    
    return new Promise((resolve, reject) => {
        
       Recipe.findByIdAndUpdate(id, body, {new: true})
       .then(payload => {
        resolve(payload);
    })
    .catch((error) => {
        reject(error)
    });
    }); 
}

function deleteRecipe(id) {
    
    return new Promise((resolve, reject) => {
        
       Recipe.findByIdAndDelete(id)
       .then(payload => {
        resolve(payload);
    })
    .catch((error) => {
        reject(error)
    });
    }); 
}

module.exports = {
    getAllRecipe,
    createNewRecipe,
    updateRecipe,
    deleteRecipe
}