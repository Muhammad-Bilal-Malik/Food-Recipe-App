import React, { useState } from "react";
import { submitDetails } from "../Api";

export const Modal = ({ closeRecipeModal }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [loading, setLoading] = useState(false);

  // for adding image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Sigle ingredient delete
  const handleDelete = (e, index) => {
    e.preventDefault();
    const updateIngredients = ingredients.filter((id, i) => i !== index); // When we delete item with index we pass two parameters

    setIngredients(updateIngredients);
  };

  // adding multiple ingredients input fields
  const addIngredients = (e) => {
    e.preventDefault();
    if (ingredientName.trim()) {
      setIngredients([...ingredients, ingredientName]);
      setIngredientName("");
    }
  };

  // Submiting All Data

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ingredientName.length === 0) {
      alert("Enter atleast one Ingredient");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("image", image);

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=56683e228e135f7f341ed44aa626df68`, // replace with your key
        {
          method: "POST",
          body: formData,
        }
      );
      const imgbbData = await imgbbRes.json();
      const { url, name } = imgbbData.data.image;
      const recipeDetails = {
        title,
        image: { url, name },
        ingredients,
      };
      const response = await submitDetails(recipeDetails);
    } catch (error) {}

    setTitle("");
    setImage("");
  };

  return (
    <div
      onClick={closeRecipeModal}
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
              Recipe Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
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
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
              >
                + Add Ingredient
              </button>
            </label>
            <input
              type="text"
              value={ingredientName}
              placeholder="Add Ingredient Name"
              onChange={(e) => setIngredientName(e.target.value)}
              className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <ul className="h-20 overflow-y-auto">
            {ingredients.map((item, index) => {
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
            className="w-full bg-green-500 font text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
};
