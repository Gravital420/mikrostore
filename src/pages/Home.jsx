import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setFeaturedProducts(data.slice(0, 4));
    });
  }, []);

  return (
    <div>
      <div
        className="text-center text-light p-5"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1200x400?text=Bienvenido+a+Nuestra+Tienda')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="fw-bold" style={{ color: "#ffcc00" }}>Bienvenido a Mikro Store</h1>
        <p style={{ color: "#ffcc00" }}>Encuentra los mejores productos al mejor precio ("Mejores que Makro!")</p>
        <Link to="/store">
          <Button variant="primary" size="lg">
            Ir a la Tienda
          </Button>
        </Link>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-4">Categorías Destacadas</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://media.gq.com.mx/photos/618d551e6a6e6712bf9ef5dc/4:3/w_2664,h_1998,c_limit/mitos-sobre-la-relacion-entre-costo-y-calidad-en-la-ropa-para-hombre-saco.jpg" />
              <Card.Body className="text-center">Ropa</Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://sensing.konicaminolta.us/wp-content/uploads/oled-the-next-big-thing-in-televisions.png" />
              <Card.Body className="text-center">Electrónica</Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://nupciasmagazine.com/wp-content/uploads/2024/01/Joyeria-y-accesorios-2024-Lo-que-no-te-puede-faltar-scaled.jpg" />
              <Card.Body className="text-center">Joyería</Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://previews.123rf.com/images/serdarbasak/serdarbasak1312/serdarbasak131200648/24763522-ikea-home-improvement-store-furniture-section.jpg" />
              <Card.Body className="text-center">Hogar</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col md={3} key={product.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "1rem" }}>{product.title}</Card.Title>
                  <Card.Text className="fw-bold text-success">${product.price}</Card.Text>
                  <Link to={`/product/${product.id}`}>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Suscripción */}
      <div className="bg-light py-5 text-center">
        <h3>Suscríbete y recibe ofertas exclusivas</h3>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          className="form-control w-50 mx-auto my-3"
        />
        <Button variant="success">Suscribirme</Button>
      </div>
    </div>
  );
};

export default Home;