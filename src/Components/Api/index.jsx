export const submitDetails = async (recipeInfo) => {
  const response = await fetch(`http://localhost:3001/recipies`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(recipeInfo),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
};

// This is APi to get data from DAtabase and show it on Ui for end User

export const fetchRecipeDetails = async () => {
  const response = await fetch(`http://localhost:3001/recipies`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status : ${response.status}`);
  }
  const result = await response.json();
  return result;
};

//Single recipe details View

export const fetchSingleRecipe = async (recipeid) => {
  const response = await fetch(`http://localhost:3001/recipies/${recipeid}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  return result;
};

// This below structure is for deletion api used for deleting record

export const deleteSingleRecipe = async (itemid) => {
  const response = await fetch(`http://localhost:3001/recipies/${itemid}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`HTTP error Status : ${response.status}`);
  }
  const result = await response.json();
  return response.ok;
};

// Update record

export const updateRecipeIngredients = async (info) => {
  const response = await fetch(`http://localhost:3001/recipies/${info.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      title: info.title,
      image: info.image,
    }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
};
