import { useState, useEffect } from "react";
import { Modal } from "../../Components/Modal/Index";
import { Card } from "../../Components/Cards";
import { fetchRecipeDetails } from "../../Components/Api";

export const Home = () => {
  const [recipeModal, setrecipeModal] = useState(false);
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
        <div className="flex justify-between items-center px-5 top-0 h-14 shadow-md shadow-gray-200 ">
          <h2 className="text-2xl font-bold">Food Recipe</h2>
          <button
            onClick={() => setrecipeModal(true)}
            className=" py-1.5 px-3 rounded-md bg-orange-500 text-white shadow-md shadow-black/20 hover:cursor-pointer"
          >
            + Add Recipe
          </button>
        </div>
        <div className="flex justify-between items-center mt-6 px-5 font-semibold">
          <input
            type="text"
            name="search"
            placeholder="Search recipes, ingredients, or cuisine..."
            className="bg-white/75 p-3 px-8 rounded-md outline-none border border-gray-200 lg:w-lg"
          />
          <div>
            <ul className="flex gap-5">
              <li className="text-white cursor-pointer text-lg bg-orange-600 px-3 py-1.5 rounded-full">
                All Recipes
              </li>
              <li className="text-lg border cursor-pointer border-gray-200 shadow px-3 py-1.5 rounded-full">
                Favorites
              </li>
              <li className="text-lg border cursor-pointer border-gray-200 shadow px-3 py-1.5 rounded-full">
                Breakfast
              </li>
              <li className="text-lg border cursor-pointer border-gray-200 shadow px-3 py-1.5 rounded-full">
                Lunch
              </li>
              <li className="text-lg border cursor-pointer border-gray-200 shadow px-3 py-1.5 rounded-full">
                Dinner
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap">
          {recipes.map((item, i) => {
            return (
              <div key={i}>
                <Card recipeData={item} />
              </div>
            );
          })}
        </div>
      </div>

      {recipeModal && <Modal closeRecipeModal={() => setrecipeModal(false)} />}
    </>
  );
};
