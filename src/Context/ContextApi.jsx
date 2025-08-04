import React, { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [recipeModal, setrecipeModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewRecipe, setViewRecipe] = useState();
  //   const [confirmDelete, setConfirmDelete] = useState();
  const [editRecipe, setEditRecipe] = useState(null);
  //   const [recipes, setRecipes] = useState([]);
  //   const [search, setSearch] = useState();
  const [filteredRecipe, setFilteredRecipe] = useState([]);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
