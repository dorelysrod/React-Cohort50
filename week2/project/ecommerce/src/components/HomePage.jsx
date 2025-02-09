import ProductList from './ProductsList';
import CategoryList from './CategoriesList';

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
