// backend/routes/recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');


// Route to get   recipe by id
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to create a new recipe
router.post('/', async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        image: req.body.image,
        createdBy: req.body.createdBy
    });

    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to update a recipe
router.patch('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        recipe.title = req.body.title || recipe.title;
        recipe.description = req.body.description || recipe.description;
        recipe.ingredients = req.body.ingredients || recipe.ingredients;
        recipe.instructions = req.body.instructions || recipe.instructions;
        recipe.image = req.body.image || recipe.image;

        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a recipe
router.delete('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        await recipe.remove();
        res.json({ message: 'Recipe deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
