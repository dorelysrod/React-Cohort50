import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"; 
import "../styles/CategoriesList.css";

const CategoryList = ({ filterProducts, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong while loading data");
        return res.json();
      })
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch(() => setError("Failed to load categories"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />; 

  if (error) return <p className="error">Error: {error}</p>;

  if (!loading && categories.length === 0) return <p>No categories found.</p>;

  return (
    <nav id="category-list">
      <div
        className={`category-item ${!selectedCategory ? "active" : ""}`}
        onClick={() => filterProducts(null)}
      >
        All
      </div>
      {categories.map((category) => (
        <div
          key={category}
          className={`category-item ${selectedCategory === category ? "active" : ""}`}
          onClick={() => filterProducts(category)}
        >
          {category.toUpperCase()}
        </div>
      ))}
    </nav>
  );
};
export default CategoryList;
