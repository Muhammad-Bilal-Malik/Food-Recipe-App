import React, { useContext, useEffect, useState } from "react";
import { submitDetails, updateRecipeIngredients } from "../Api";
import { Loader } from "../Loader/Loader";
import { toast } from "react-toastify";
import { cuisineType, mealType } from "../../Utills";
import { UserContext } from "../../Context/ContextApi";

export const Modal = ({ closeRecipeModal, editRecipeIngredients }) => {
  const { editRecipe } = useContext(UserContext);
  console.log("editRecipe", editRecipe);
  const [loading, setLoading] = useState(false);
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    image: null,
    imagePreview: "",
    cuisineType: "Other",
    mealType: "Dinner",
    ingredients: [],
    ingredientName: "",
  });

  useEffect(() => {
    if (editRecipe) {
      setRecipeForm({
        title: editRecipe.title,
        image: editRecipe.image,
        imagePreview: "",
        cuisineType: editRecipe.cuisineType,
        mealType: editRecipe.mealType,
        ingredients: editRecipe.ingredients,
        ingredientName: editRecipe.ingredientName,
      });
    }
  }, [editRecipe]);

  // for adding image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRecipeForm((prev) => ({ ...prev, image: file }));
      setRecipeForm((prev) => ({
        ...prev,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  // Sigle static ingredient delete
  const handleDelete = (e, index) => {
    e.preventDefault();
    setRecipeForm((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  // adding multiple ingredients input fields
  const addIngredients = (e) => {
    e.preventDefault();
    if (recipeForm.ingredientName.trim()) {
      setRecipeForm((prev) => ({
        ...prev,
        ingredients: [...recipeForm.ingredients, recipeForm.ingredientName],
        ingredientName: "",
      }));
    }
  };

  //fill form initially

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setRecipeForm({
      ...recipeForm,
      [name]: value,
    });
  };

  // Submiting All Data

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (recipeForm.ingredients.length === 0) {
      alert("Enter atleast one Ingredient");
      return;
    }
    try {
      if (editRecipe) {
        const response = await updateRecipeIngredients(
          recipeForm,
          editRecipe.id
        );
      } else {
        const recipeDetails = {
          title: recipeForm.title,
          image: null,
          ingredients: recipeForm.ingredients,
          cuisineType: recipeForm.cuisineType,
          mealType: recipeForm.mealType,
        };

        const response = await submitDetails(recipeDetails);
        toast.success("Record added successfully!");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={() => {
        closeRecipeModal();
      }}
      className="min-w-screen min-h-screen fixed inset-0 bg-black/80 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-2xl rounded-xl mt-5 mx-auto shadow-sm shadow-white p-6"
      >
        <div className="flex justify-end">
          <span
            onClick={closeRecipeModal}
            className="text-center text-red-500 hover:text-red-600 font-semibold cursor-pointer shadow-sm shadow-gray-300 px-2 rounded-sm"
          >
            x
          </span>
        </div>
        <h2 className="font-bold text-gray-800 text-2xl mb-6 text-center">
          Add New Recipe
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Title Input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Recipe Title *
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter Title"
              value={recipeForm.title}
              onChange={handleFormInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cuisineType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Cuisine Type
            </label>
            <select
              name="cuisineType"
              value={recipeForm.cuisineType}
              onChange={handleFormInput}
              id="cuisineType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {cuisineType.map((cuisine, i) => {
                return (
                  <option key={i} value={cuisine}>
                    {cuisine}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="cuisineType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Meal Type
            </label>
            <select
              name="mealType"
              value={recipeForm.mealType}
              onChange={handleFormInput}
              id="mealType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {mealType.map((meal, i) => {
                return (
                  <option key={i} value={meal}>
                    {meal}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Image Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Recipe Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
            {recipeForm.imagePreview && (
              <div className="mt-2">
                <img
                  src={recipeForm.imagePreview}
                  alt="imagePreview"
                  className="h-32 object-cover rounded-md"
                />
              </div>
            )}

            {!recipeForm.imagePreview && editRecipeIngredients && (
              <div className="mt-2">
                <img
                  src={recipeForm.image.url}
                  alt="imagePreview"
                  className="h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          {/* for Ingredient input field */}
          <div className="mb-4">
            <label className="flex justify-between text-gray-700 text-sm font-bold mb-2">
              Ingredients
              <button
                onClick={addIngredients}
                className="mt-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-md hover:bg-orange-200 text-sm transition-colors duration-300"
              >
                + Add Ingredient
              </button>
            </label>
            <input
              type="text"
              value={recipeForm.ingredientName}
              name="ingredientName"
              placeholder="Add Ingredient Name"
              onChange={handleFormInput}
              className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <ul className="h-20 overflow-y-auto">
            {recipeForm.ingredients.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-100 px-3 mb-1.5 rounded"
                >
                  <span>{item}</span>
                  <button
                    onClick={(e) => handleDelete(e, index)}
                    className=" text-red-600 flex justify-center bg-transparent items-end rounded px-1 hover:cursor-pointer  transition-all duration-200 shadow-md shadow-black/20"
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            type="submit"
            className="w-full bg-orange-500 font text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none "
          >
            {editRecipe ? "Update" : "Save"}
          </button>
        </form>
      </div>
      {loading && <Loader />}
    </div>
  );
};
