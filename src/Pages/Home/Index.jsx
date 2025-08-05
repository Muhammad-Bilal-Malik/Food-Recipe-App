import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { Modal } from "../../Components/Modal/Index";
import {
  deleteSingleRecipe,
  fetchRecipeDetails,
  fetchSingleRecipe,
} from "../../Components/Api";
import { FilterButton } from "../../Components/FilterButton";
import { RecipeList } from "../../Components/Modal/RecipeList";
import { RecipeIngredientsModal } from "../../Components/Modal/RecipeIngredientsModal";
import { DeleteModal } from "../../Components/Modal/DeleteModal";
import { UserContext } from "../../Context/ContextApi";
export const Home = () => {
  const [confirmDelete, setConfirmDelete] = useState();
  const [search, setSearch] = useState();
  const {
    recipeModal,
    setrecipeModal,
    editRecipe,
    setEditRecipe,
    viewRecipe,
    setViewRecipe,
    setFilteredRecipe,
    recipes,
    setRecipes,
  } = useContext(UserContext);
  useEffect(() => {
    getRecipies();
  }, []);
  const getRecipies = async () => {
    try {
      const response = await fetchRecipeDetails();
      setRecipes(response);
      setFilteredRecipe(response);
    } catch (error) {}
  };

  const fetchOneRecipe = async (itemid) => {
    try {
      const response = await fetchSingleRecipe(itemid);
      setViewRecipe(response);
    } catch (err) {
      // setError(err);
    } finally {
      // setLoading(false);
    }
  };

  const handleDeleteRecipe = async () => {
    try {
      const response = await deleteSingleRecipe(confirmDelete);
      toast.success("Item deleted successfully!");
    } catch (error) {}
  };

  const getId = (id) => {
    setConfirmDelete(id);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredProducts = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase())
    );
    if (e.target.value) {
      setFilteredRecipe(filteredProducts);
    } else {
      getRecipies();
    }
  };

  const handleMealFilter = (label) => {
    if (label === "All Recipes") {
      setFilteredRecipe(recipes);
      return;
    }
    const filteredMeal = recipes.filter((recipe) => recipe.mealType === label);
    setFilteredRecipe(filteredMeal);
  };

  const fetchRecipeforUpdate = async (recipe) => {
    setEditRecipe(recipe);
    setViewRecipe(null);
  };

  return (
    <>
      <div>
        <header className="flex justify-between items-center px-5 top-0 h-14 shadow-md shadow-gray-200 ">
          <h2 className="text-2xl font-bold">Food Recipe</h2>
          <button>Sign Up</button>
          <button>Login</button>
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
            onChange={handleSearch}
            name="search"
            placeholder="Search recipes, ingredients, or cuisine..."
            className="bg-white/75 p-3 px-8 rounded-md outline-none border border-gray-200 lg:w-lg"
          />
          <div>
            <FilterButton mealFilter={handleMealFilter} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <RecipeList onView={fetchOneRecipe} onDelete={getId} />
        </div>
      </div>

      {(recipeModal || editRecipe) && (
        <Modal
          closeRecipeModal={() => {
            setEditRecipe(null);
            setrecipeModal(null);
          }}
        />
      )}
      {viewRecipe && (
        <RecipeIngredientsModal
          closeModal={() => setViewRecipe(null)}
          edit={fetchRecipeforUpdate}
        />
      )}
      {confirmDelete && (
        <DeleteModal
          onClose={() => setConfirmDelete()}
          deleteRecipe={handleDeleteRecipe}
        />
      )}
    </>
  );
};
