import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) return <Spinner />;
  if (error) return <p className="error">Error: {error}</p>;
  if (!product) return <p className="error">Product not found</p>;

  return (
    <div className="product-detail">
      <img className="product-image" src={product.image} alt={product.title} />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
