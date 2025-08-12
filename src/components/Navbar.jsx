import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function MyNavbar() {
  const { cart } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/store">Tienda</Nav.Link>
          <Nav.Link as={Link} to="/cart">
            🛒 Carrito <Badge bg="secondary">{cart.length}</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}