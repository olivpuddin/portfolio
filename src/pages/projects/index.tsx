// React
import React from "react";

// Next
import Head from "next/head";

// Components
import { Header } from "../../components/Header";

// Styles
import { Container } from "./styles";

const Projects = () => {
  return (
    <Container>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />
      <h1>Projects here</h1>
    </Container>
  );
};

export default Projects;
