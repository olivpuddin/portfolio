// Next
import type { NextPage } from "next";
import Head from "next/head";
import { Teste } from "../components/BackgroundContent";

// Components
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfólio | Bruna Oliveira</title>
      </Head>

      <Header />
      
      <Teste />
    </>
  );
};

export default Home;
