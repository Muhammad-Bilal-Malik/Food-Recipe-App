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
  console.log("myid", recipeid);
  const response = await fetch(`http://localhost:3001/recipies/${recipeid}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  return result;
};
