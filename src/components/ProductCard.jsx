import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card shadow-sm h-100 border-warning">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title fw-bold text-primary">{product.title}</h6>
        <p className="card-text text-secondary">{product.price} USD</p>
        <button
          className="btn btn-warning mt-auto fw-semibold"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;