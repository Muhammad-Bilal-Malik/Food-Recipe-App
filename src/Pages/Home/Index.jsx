import { useState, useEffect } from "react";
import { Modal } from "../../Components/Modal/Index";
import { fetchRecipeDetails } from "../../Components/Api";
import { FilterButton } from "../../Components/FilterButton";
import { RecipeList } from "../../Components/Modal/RecipeList";
import { RecipeIngredientsModal } from "../../Components/Modal/RecipeIngredientsModal";

export const Home = () => {
  const [recipeModal, setrecipeModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewRecipe, setViewRecipe] = useState(false);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipies();
  }, []);

  const getRecipies = async () => {
    try {
      const response = await fetchRecipeDetails();
      setRecipes(response);
    } catch (error) {}
  };

  return (
    <>
      <div>
        <header className="flex justify-between items-center px-5 top-0 h-14 shadow-md shadow-gray-200 ">
          <h2 className="text-2xl font-bold">Food Recipe</h2>
          <button
            onClick={() => setrecipeModal(true)}
            className=" py-1.5 px-3 rounded-md bg-orange-500 text-white shadow-md shadow-black/20 hover:cursor-pointer"
          >
            + Add Recipe
          </button>
        </header>
        <div className="flex justify-between items-center mt-6 px-5 font-semibold">
          <input
            type="text"
            name="search"
            placeholder="Search recipes, ingredients, or cuisine..."
            className="bg-white/75 p-3 px-8 rounded-md outline-none border border-gray-200 lg:w-lg"
          />
          <div>
            <FilterButton
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <RecipeList recipes={recipes} />
        </div>
      </div>

      {recipeModal && <Modal closeRecipeModal={() => setrecipeModal(false)} />}
      {viewRecipe && (
        <RecipeIngredientsModal open={() => setViewRecipe(true)} />
      )}
    </>
  );
};
