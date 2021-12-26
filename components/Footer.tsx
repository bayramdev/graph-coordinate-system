import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="bg-primary w-100">
      <Container className="py-4 text-center text-secondary">
        Made by <a href="https://github.com/bayramdev">Bayram</a> and served at{" "}
        <a href="https://github.com/bayramdev/graph-coordinate-system">
          GitHub
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
