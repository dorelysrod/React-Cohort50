import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import HeartIcon from "../components/HeartIcon";
import Spinner from "../components/Spinner";
import "../styles/ProductList.css";
import { useFavorite } from "../hooks/useFavorite";

const FavoritePage = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorite();
  const productUrls = useMemo(
    () => favorites.map((id) => `https://fakestoreapi.com/products/${id}`),
    [favorites]
  );

  const { data: products, loading, error } = useFetch(productUrls);

  if (!favorites || favorites.length === 0) {
    return <p>No favorite products yet.</p>;
  }



  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <HeartIcon productId={product.id} />
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))
      ) : (
        <p>No favorite products found.</p>
      )}
    </div>
  );
};

export default FavoritePage;
