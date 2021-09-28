var express = require('express');
var router = express.Router();
const { getAllRecipe, createNewRecipe, updateRecipe, deleteRecipe } = require('./controller/recipeController');

/* GET home page. */
router.get('/', function(req, res,) {
    getAllRecipe({})
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
    createNewRecipe(req.body)
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
    updateRecipe(req.params.id, req.body)
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
    deleteRecipe(req.params.id)
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