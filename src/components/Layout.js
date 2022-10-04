import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Row>
            <Navbar.Brand>
              <img src="img/logo.png" alt="Logo" style={{ width: "70px" }} />
            </Navbar.Brand>
          </Row>
          <Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  Quem Somos
                </Link>
                <Link to="/comunidade" className="nav-link">
                  Comunidade
                </Link>
                <Link to="/oficinas" className="nav-link">
                  Oficinas
                </Link>
                <Link to="/empreendedorismo" className="nav-link">
                  Empreendedorismo
                </Link>
                <Link to="/doacoes" className="nav-link">
                  Doações
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}
