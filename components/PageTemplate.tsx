import React from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageTemplateProps {
  title?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  const title = props.title ?? "Graph Coordinate System";

  return (
    <div className="w-100 h-100 d-flex flex-column">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container>
        <main className="py-4 w-100 h-100">{props.children}</main>
      </Container>

      <Footer />
    </div>
  );
};

export default PageTemplate;
