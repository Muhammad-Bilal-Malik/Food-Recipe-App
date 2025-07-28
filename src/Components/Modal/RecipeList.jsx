import { RecipeCard } from "../RecipeCard";

export const RecipeList = ({ recipes }) => {
  if (recipes) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🍳</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No recipes found
        </h3>
        <p className="text-gray-500">Add your first recipe to get started!</p>
      </div>
    );
  }
  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipeCard />;
      })}
    </div>
  );
};
