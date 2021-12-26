import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeaderLink from "./HeaderLink";
import HeaderDataButton from "./HeaderDataButton";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>Graph Coordinate System</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Simulations" id="basic-nav-dropdown">
                <HeaderLink
                  href="/coordinates"
                  child={(a) => (
                    <NavDropdown.Item active={a}>Coordinates</NavDropdown.Item>
                  )}
                />
                <HeaderLink
                  href="/diagram"
                  child={(a) => (
                    <NavDropdown.Item active={a}>Diagram</NavDropdown.Item>
                  )}
                />
                <HeaderLink
                  href="/graph3d"
                  child={(a) => (
                    <NavDropdown.Item active={a}>3D Graph</NavDropdown.Item>
                  )}
                />
              </NavDropdown>
              <HeaderLink
                href="/about"
                child={(a) => <Nav.Link active={a}>About</Nav.Link>}
              />
            </Nav>

            <Nav>
              <HeaderDataButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
