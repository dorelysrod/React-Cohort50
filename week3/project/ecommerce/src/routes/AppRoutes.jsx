import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import FavoritesPage from "../pages/FavoritePage";  
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";  
import "../styles/Navbar.css"; 


function AppRoutes() {
  const { data: categories, loading, error } = useFetch("https://fakestoreapi.com/products/categories");

  if (loading) return <Spinner />;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/favorites" className="navbar-link">Favorites</Link>
      </nav>

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

