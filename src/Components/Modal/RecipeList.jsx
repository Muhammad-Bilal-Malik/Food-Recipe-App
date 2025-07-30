import { RecipeCard } from "../RecipeCard";

export const RecipeList = ({ recipes, onView, onDelete }) => {
  if (recipes.length === 0) {
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
    <div className="flex flex-wrap">
      {recipes.map((recipe, i) => {
        return (
          <div key={i}>
            <RecipeCard
              recipeData={recipe}
              onView={onView}
              onDelete={onDelete}
            />
          </div>
        );
      })}
    </div>
  );
};
