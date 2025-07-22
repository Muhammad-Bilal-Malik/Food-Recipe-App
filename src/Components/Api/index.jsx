export const submitDetails = async (recipeInfo) => {
  console.log("student", recipeInfo);
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
