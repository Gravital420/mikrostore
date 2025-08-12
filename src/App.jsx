import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold text-warning" to="/">
            Mikro Store
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/store">Tienda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/cart">🛒 Carrito</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;