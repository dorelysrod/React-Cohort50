function ProductList({ products }) {
  return (
    <div id="product-list" className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-name">{product.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
