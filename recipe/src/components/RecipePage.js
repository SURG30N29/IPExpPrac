import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
      <img src={recipe.image} alt={recipe.name} style={{ width: '300px' }} />
    </div>
  );
}

export default RecipePage;
