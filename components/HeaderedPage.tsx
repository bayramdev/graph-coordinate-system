import React from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Header from "./Header";

interface HeaderedPageProps {
  title?: string;
}

const HeaderedPage: React.FC<HeaderedPageProps> = (props) => {
  const title = props.title ?? "Graph Coordinate System";

  return (
    <div className="w-100 h-100 d-flex flex-column">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container className="py-4 w-100 h-100">{props.children}</Container>
    </div>
  );
};

export default HeaderedPage;
