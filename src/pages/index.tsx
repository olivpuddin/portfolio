// Next
import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "./home";

// Components
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Portfólio | Bruna Oliveira</title>
      </Head>

      <Header />
      <h1>porra</h1>
    </Container>
  );
};

export default Home;
