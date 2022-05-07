// React
import React from "react";

// Next
import Head from "next/head";

// Components
import { Header } from "../../components/Header";
import { CarouselMobile } from "../../components/Carousel/Mobile";
import { CarouselWeb } from "../../components/Carousel/Web";

// Styles
import { Container, Section, Content } from "./styles";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />

      <Container>
        <Content>
          <Section>
            <div>
              <p>oi</p>
              <CarouselMobile />
            </div>

            <div>
              <p>oi dnv</p>
              <CarouselWeb />
            </div>
          </Section>
        </Content>
      </Container>
    </>
  );
};

export default Projects;
