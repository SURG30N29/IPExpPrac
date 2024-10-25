const express = require('express');
const router = express.Router();
const recipes = require('../data/recipes.json');

// GET all recipes
router.get('/recipes', (req, res) => {
  res.json(recipes);
});

// GET a specific recipe by ID
router.get('/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ message: "Recipe not found" });
  }
});

module.exports = router;
