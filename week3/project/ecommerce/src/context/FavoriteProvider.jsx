import { useState, useEffect, useMemo } from "react";
import { FavoriteContext } from "./FavoriteContext";

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("favorites")) || [];
    } catch (error) {
      console.error("Error loading favorites:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  }, []);

  const toggleFavorite = (productId) => {
    try {
      let updatedFavorites = favorites.includes(productId)
        ? favorites.filter((id) => id !== productId)
        : [...favorites, productId];
      setFavorites(updatedFavorites);
      sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  const value = useMemo(() => ({ favorites, toggleFavorite }), [favorites]);

  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  );
};

export default FavoriteProvider;