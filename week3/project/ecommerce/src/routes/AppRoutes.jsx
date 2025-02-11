import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import FavoritesPage from "../pages/FavoritePage";  
import useFetch from "../hooks/useFetch";

function AppRoutes() {
  const { data: categories, loading, error } = useFetch("https://fakestoreapi.com/products/categories");

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      {loading && <p>Loading categories...</p>}
      {error && <p>Error loading categories</p>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </>
  );
}

export default AppRoutes;

