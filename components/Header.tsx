import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { GithubSourceLink } from "./GithubSourceLink";

export const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Graph Coordinate System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="/extract">
                <Nav.Link>Extract</Nav.Link>
              </Link>

              <Link href="/coordinate">
                <Nav.Link>Coordinates</Nav.Link>
              </Link>

              <Link href="/graph" passHref>
                <Nav.Link>Graph</Nav.Link>
              </Link>
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
