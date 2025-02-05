import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import ProductList from './components/ProductsList';
import CategoryList from './components/CategoriesList';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <div className="app">
        <h1>Products</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CategoryList
                  filterProducts={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
                <ProductList selectedCategory={selectedCategory} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;