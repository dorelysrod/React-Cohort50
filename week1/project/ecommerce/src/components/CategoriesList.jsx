const CategoryList = ({ categories, filterProducts, selectedCategory }) => {
  const handleCategoryClick = (category) => {
    filterProducts(category); 
  };

  return (
    <nav id="category-list">
      <div
        className={`category-item ${!selectedCategory ? 'active' : ''}`}
        onClick={() => filterProducts(null)} // "All" category will reset filtering
      >
        All
      </div>
      {categories.map((category) => (
        <div
          key={category}
          className={`category-item ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category} {/* Display "FAKE:" in the category */}
        </div>
      ))}
    </nav>
  );
};

export default CategoryList;