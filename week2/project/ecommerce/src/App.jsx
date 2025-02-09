import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import ProductDetail from './components/ProductDetail';
import HomePage from "./components/HomePage";
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
            element={<HomePage selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
