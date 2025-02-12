import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import HeartIcon from "../components/HeartIcon";
import Spinner from "../components/Spinner";
import "../styles/ProductList.css";

const ProductList = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products";

  const { data: products, loading, error } = useFetch(url);

  if (loading) return <Spinner />;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item" onClick={() => navigate(`/product/${product.id}`)}>
          <HeartIcon productId={product.id} />
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;