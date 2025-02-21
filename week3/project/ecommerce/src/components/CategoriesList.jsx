import Spinner from "../components/Spinner"; 
import useFetch from "../hooks/useFetch"; // Import useFetch hook
import "../styles/CategoriesList.css";

const CategoryList = ({ filterProducts, selectedCategory }) => {
  const { data: categories, loading, error } = useFetch("https://fakestoreapi.com/products/categories");

  if (loading) return <Spinner />; 

  if (error) return <p className="error">Error: {error}</p>;

  if (categories.length === 0) return <p>No categories found.</p>;
  
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
