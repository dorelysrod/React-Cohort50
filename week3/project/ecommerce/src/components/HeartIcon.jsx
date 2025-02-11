import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useFavorite from '../hooks/useFavorite'; 

function HeartIcon({ productId }) {
  const { favorites, toggleFavorite } = useFavorite();
  const isFavorited = favorites.includes(productId);

  const handleClick = () => {
    toggleFavorite(productId);
  };

  return (
    <button onClick={handleClick} className="favorite-btn">
      {isFavorited ? <FaHeart size={24} color="black" /> : <FaRegHeart size={24} color="black" />}
    </button>
  );
}

export default HeartIcon;

