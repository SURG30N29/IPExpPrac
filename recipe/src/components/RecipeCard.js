import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
    </div>
  );
}

export default RecipeCard;
