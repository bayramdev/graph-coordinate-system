import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import GithubSourceLink from "./GithubSourceLink";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>Graph Coordinate System</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <HeaderLink href="/extract">Extract</HeaderLink>
              <HeaderLink href="/coordinates">Coordinates</HeaderLink>
              <HeaderLink href="/graph">Graph</HeaderLink>
            </Nav>

            <Nav>
              <GithubSourceLink />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
