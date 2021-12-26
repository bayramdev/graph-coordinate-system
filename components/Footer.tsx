import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="bg-primary w-100 text-white">
      <Container className="py-4 text-center">
        Made by{" "}
        <a href="https://github.com/bayramdev" className="text-white">
          Bayram
        </a>{" "}
        and served at{" "}
        <a
          href="https://github.com/bayramdev/graph-coordinate-system"
          className="text-white"
        >
          GitHub
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
