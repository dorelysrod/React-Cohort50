import ProductList from '../components/ProductsList';
import CategoryList from '../components/CategoriesList';

function HomePage({ selectedCategory, setSelectedCategory }) {
    return (
      <>
        <CategoryList
          filterProducts={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <ProductList selectedCategory={selectedCategory} />
      </>
    );
}

export default HomePage; 
