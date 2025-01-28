function CategoryList({ categories, filterProducts, selectedCategory }) {
  return (
    <div>
      {categories.map((category) => (
        <div
          key={category}
          className={`category-item ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => filterProducts(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
export default CategoryList;