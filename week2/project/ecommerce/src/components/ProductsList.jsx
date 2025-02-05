import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import "../styles/ProductList.css";


const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : "https://fakestoreapi.com/products";

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setProducts([]);
          setError("Failed to load products");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCategory]);

  return (
    <div id="product-list" className="product-list">
      {loading && <Spinner />}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && products.length === 0 && (
        <p className="error">No products found</p>
      )}
      {!loading && !error &&
        products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;

