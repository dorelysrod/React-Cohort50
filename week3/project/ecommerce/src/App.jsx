import { BrowserRouter as Router } from "react-router-dom";
import FavoritesProvider from "./context/FavoriteProvider";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <div className="app">
          <AppRoutes />
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;