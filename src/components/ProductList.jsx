import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div className="row g-4">
      {products.map(product => (
        <div className="col-md-4 col-lg-3" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}