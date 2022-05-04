// Next
import type { NextPage } from "next";
import Head from "next/head";

// Components
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfólio | Bruna Oliveira</title>
      </Head>

      <Header />
      
      <h1>Home here</h1>
    </>
  );
};

export default Home;
