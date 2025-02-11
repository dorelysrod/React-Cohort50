import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const useFavorite = () => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  return { favorites, toggleFavorite };
};

export default useFavorite;
