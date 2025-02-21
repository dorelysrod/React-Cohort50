import { useState, useEffect, useCallback } from "react";
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

  const toggleFavorite = useCallback((productId) => {
    try {
      setFavorites((prevFavorites) => {
        let updatedFavorites = prevFavorites.includes(productId)
          ? prevFavorites.filter((id) => id !== productId)
          : [...prevFavorites, productId];

        sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  }, []);
  const value = { favorites, toggleFavorite };

  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
