import ProductList from "../components/ProductsList";
import CategoryList from "../components/CategoriesList";
import { useState } from "react";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  return (
    <>
    <h1>Products</h1>
      <CategoryList filterProducts={setSelectedCategory} selectedCategory={selectedCategory} />
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
}

export default HomePage;
