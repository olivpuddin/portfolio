// React
import React from "react";

// Next
import Head from "next/head";

// Components
import { Header } from "../../components/Header";

// Styles
import { Container } from "./styles";

const Contact = () => {
  return (
    <Container>
      <Head>
        <title>Contact</title>
      </Head>

      <Header />
      <h1>Contact here</h1>
    </Container>
  );
};

export default Contact;
