import { useState } from "react";
import { RecipeIngredientsModal } from "../Modal/RecipeIngredientsModal";
import { fetchSingleRecipe } from "../Api";

export const Card = ({ recipeData }) => {
  const [ingredients, setMyIngredients] = useState();
  console.log("ingredientsId", ingredients);

  const fetchOneRecipe = async (itemid) => {
    console.log(itemid);
    try {
      const response = await fetchSingleRecipe(itemid);
      console.log("response", response);
      setMyIngredients(response);
    } catch (err) {
      // setError(err);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="px-5 mt-5">
      <div className="w-52 px-2.5 rounded shadow-md ">
        <img
          className="rounded-md pt-2.5 w-[190px] h-[153px] object-center"
          src={
            recipeData.image.url
              ? recipeData.image.url
              : "https://picsum.photos/200/300"
          }
          alt=""
        />
        <div className="py-2.5">
          <p className="text-xs">Pakistani Recipe</p>
          <h1 className="text-base font-semibold text-black">
            {recipeData.title}
          </h1>
          <button
            onClick={() => {
              fetchOneRecipe(recipeData.id);
            }}
            className="text-sm cursor-pointer bg-gray-950 text-white py-1 px-2 rounded"
          >
            Recipe Details
          </button>
        </div>
      </div>
      {ingredients && (
        <RecipeIngredientsModal
          closeModal={() => setMyIngredients()}
          recipeDetails={ingredients}
        />
      )}
    </div>
  );
};
