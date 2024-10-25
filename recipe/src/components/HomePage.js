import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div>
      <h1>Popular Dishes</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
