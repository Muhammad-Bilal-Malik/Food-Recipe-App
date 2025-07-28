import { useState } from "react";
import { toast } from "react-toastify";
import { RecipeIngredientsModal } from "./Modal/RecipeIngredientsModal";
import { deleteSingleRecipe, fetchSingleRecipe } from "./Api";
import { DeleteModal } from "./Modal/DeleteModal";

export const RecipeCard = ({ recipeData }) => {
  const [ingredients, setMyIngredients] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletId, setDeleteId] = useState(null);

  const fetchOneRecipe = async (itemid) => {
    try {
      const response = await fetchSingleRecipe(itemid);
      setMyIngredients(response);
    } catch (err) {
      // setError(err);
    } finally {
      // setLoading(false);
    }
  };

  const deleteRecipe = async (deleteitemid) => {
    try {
      const response = await deleteSingleRecipe(deleteitemid);
      toast.success("Item deleted successfully!");
    } catch (error) {}
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
          <div className="flex justify-between">
            <button
              onClick={() => {
                fetchOneRecipe(recipeData.id);
              }}
              className="text-sm cursor-pointer bg-gray-950 text-white py-1 px-2 rounded"
            >
              Recipe Details
            </button>
            <svg
              onClick={() => {
                setDeleteModal(true);
                setDeleteId(recipeData.id);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-400 cursor-pointer hover:text-red-600 transition-colors duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
      {ingredients && (
        <RecipeIngredientsModal
          closeModal={() => setMyIngredients()}
          recipeDetails={ingredients}
        />
      )}
      {deleteModal && (
        <DeleteModal
          closeModal={() => setDeleteModal()}
          deleteRecipe={() => deleteRecipe(deletId)}
        />
      )}
    </div>
  );
};
