import React from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Header from "./Header";

interface HeaderedPageProps {
  title?: string | undefined;
}

const HeaderedPage: React.FC<HeaderedPageProps> = (props) => {
  const title = props.title ?? "Graph Coordinate System";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container style={{ marginTop: 24 }}>{props.children}</Container>
    </div>
  );
};

export default HeaderedPage;
