import { useState, useEffect } from 'react';
import ProductList from './components/ProductsList';
import CategoryList from './components/CategoriesList';
import allCategories from './fake-data/all-categories'; 
import allProducts from './fake-data/all-products'; 
import './App.css';

const App = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    if (activeCategory) {
      // Remove "FAKE:" from the selected category for filtering
      const cleanedActiveCategory = activeCategory.replace("FAKE:", "").trim();
      const filtered = allProducts.filter(
        (product) => product.category.toLowerCase() === cleanedActiveCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts); 
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="app">
      <h1>Products</h1>
      <CategoryList
        categories={allCategories}
        filterProducts={handleCategoryClick}
        selectedCategory={activeCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;