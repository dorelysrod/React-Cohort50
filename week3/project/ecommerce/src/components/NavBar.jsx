import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/favorites" className="navbar-link">Favorites</Link>
    </nav>
  );
}

export default Navbar;
