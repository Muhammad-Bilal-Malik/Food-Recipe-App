export const RecipeIngredientsModal = ({ closeModal, recipeIngredient }) => {
  console.log("editedit", edit);
  return (
    <div
      onClick={closeModal}
      className="bg-black/95 min-w-screen flex justify-center items-center min-h-screen fixed inset-0 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-2xl h-80  p-2.5 rounded-md shadow shadow-white"
      >
        <div className="flex justify-end gap-5 pr-5 pb-1">
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 cursor-pointer"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </h1>
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 cursor-pointer"
              onClick={closeModal}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </h1>
        </div>
        <div className="overflow-hidden flex h-[85%] gap-10">
          <img
            className="w-1/2 h-56 object-cover rounded-md"
            src={
              recipeIngredient.image
                ? recipeData.image.url
                : "https://picsum.photos/200/300"
            }
            alt=""
          />
          <div className="flex flex-col w-full">
            <h3 className="text-sm ">European Dish</h3>
            <h1 className=" font-semibold">{recipeIngredient.title}</h1>
            <h2 className="font-bold">Ingredients</h2>
            <ul className="list-disc overflow-y-auto pl-5">
              {recipeIngredient.ingredients.map((item, i) => {
                return (
                  <div key={i}>
                    <li>{item}</li>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* {editRecipe && (
            <Modal
              closeEditModal={() => setEditRecipe(false)}
              editRecipeIngredients={editIngredients}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};
