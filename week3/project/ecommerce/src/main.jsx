import ReactDOM from 'react-dom';
import App from './App';
import { FavoriteProvider } from './context/FavoriteContext'; 
ReactDOM.render(
  <FavoriteProvider>  
    <App />
  </FavoriteProvider>,
  document.getElementById('root')
);
