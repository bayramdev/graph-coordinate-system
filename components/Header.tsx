import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
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
              <HeaderLink href="/coordinates">Coordinates</HeaderLink>
              <HeaderLink href="/diagram">Diagram</HeaderLink>
              <HeaderLink href="/graph3d">Graph 3D</HeaderLink>
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
