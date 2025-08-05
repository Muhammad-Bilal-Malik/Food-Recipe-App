import React, { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [recipeModal, setrecipeModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewRecipe, setViewRecipe] = useState();
  const [editRecipe, setEditRecipe] = useState(null);
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
    <UserContext.Provider
      value={{
        recipeModal,
        setrecipeModal,
        editRecipe,
        setEditRecipe,
        viewRecipe,
        setViewRecipe,
        activeFilter,
        setActiveFilter,
        filteredRecipe,
        setFilteredRecipe,
        recipes,
        setRecipes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
