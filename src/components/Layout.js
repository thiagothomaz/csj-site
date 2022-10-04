import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <img src="img/logo.png" alt="Logo" style={{ width: "70px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
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
        </Container>
      </Navbar>
      <div style={{ paddingTop: "100px" }}>
        <Outlet />
      </div>
    </div>
  );
}
