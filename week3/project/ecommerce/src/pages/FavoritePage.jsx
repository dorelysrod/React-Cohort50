import HeartIcon from "../components/HeartIcon";
import useFetch from "../hooks/useFetch";
import useFavorite from "../hooks/useFavorite";
import Spinner from "../components/Spinner";
import "../styles/ProductDetail.css"; 

const FavoritePage = () => {
  const { favorites } = useFavorite(); 
  
  const { data: allProducts, loading, error } = useFetch(
    `https://fakestoreapi.com/products`
  );

  if (favorites.length === 0) {
    return <p className="no-favorites">No products favorited yet.</p>;
  }

  const favoriteProducts = allProducts?.filter((product) =>
    favorites.includes(product.id)
  );

  if (loading) return <Spinner />;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="favorites-page">
      <h2>Your Favorite Products</h2>
      <div className="favorites-list">
        {favoriteProducts.map((product) => (
          <div key={product.id} className="favorite-item">
            <img
              src={product.image}
              alt={product.title}
              className="favorite-product-image"
            />
            <div className="favorite-product-info">
              <h3 className="favorite-product-name">{product.title}</h3>
              <p className="favorite-product-price">${product.price}</p>
              <HeartIcon productId={product.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
