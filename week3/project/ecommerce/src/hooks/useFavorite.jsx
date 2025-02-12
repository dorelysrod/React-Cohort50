import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export const useFavorite = () => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  return { favorites, toggleFavorite };
};
