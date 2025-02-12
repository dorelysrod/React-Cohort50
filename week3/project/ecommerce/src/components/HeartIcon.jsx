import { useState, useEffect } from "react";
import { useFavorite } from "../hooks/useFavorite";
import heartRegular from "../assets/heart-regular.svg";  
import heartSolid from "../assets/heart-solid.svg";  

const FavoriteButton = ({ productId }) => {
  const { favorites, toggleFavorite } = useFavorite();
  const [favorite, setFavorite] = useState(favorites.includes(productId));

  useEffect(() => {
    setFavorite(favorites.includes(productId));  
  }, [favorites, productId]);

  const handleClick = (event) => {
    event.stopPropagation(); 
    toggleFavorite(productId);  
  };

  return (
    <button onClick={handleClick} className="favorite-button">
      <img
        src={favorite ? heartSolid : heartRegular}
        alt="Favorite icon"
        className="favorite-icon"
      />
    </button>
  );
};

export default FavoriteButton;

