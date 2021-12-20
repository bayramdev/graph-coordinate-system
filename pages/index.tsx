import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Graph Coordinate System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button variant="primary">hello world</Button>
    </div>
  );
};

export default Home;
