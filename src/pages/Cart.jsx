import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2 className="fw-bold text-primary mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-secondary">Tu carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{item.title}</strong> - {item.price} USD
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;