// React
import React from "react";

// Next
import Head from "next/head";

// Components
import { Header } from "../../components/Header";
import { CarouselMobile } from "../../components/Carousel/Mobile";
import { CarouselWeb } from "../../components/Carousel/Web";

// Theme
import { useTheme } from "../../hooks/useTheme";

// assets
import BackgroundDark from "../../assets/background-dark.svg";
import BackgroundLight from "../../assets/background-light.svg";

// Icons
import { FiSmartphone, FiMonitor } from "react-icons/fi";

// Styles
import {
  Container,
  Section,
  Content,
  Mobile,
  LabelMobile,
  Web,
  LabelWeb,
  Title,
} from "./styles";

const Projects = () => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />

      <Container>
        <Content>
          {isDarkTheme ? (
            <BackgroundDark
              style={{
                position: "fixed",
                left: "0",
                right: "0",
                margin: "0 auto",
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            <BackgroundLight
              style={{
                position: "fixed",
                left: "0",
                right: "0",
                margin: "0 auto",
                width: "100%",
                height: "100%",
              }}
            />
          )}

          <Section>
            <Mobile>
              <LabelMobile>
                <FiSmartphone />
                <Title>Mobile</Title>
              </LabelMobile>

              <CarouselMobile />
            </Mobile>

            <Web>
              <LabelWeb>
                <FiMonitor />
                <Title>Web</Title>
              </LabelWeb>

              <CarouselWeb />
            </Web>
          </Section>
        </Content>
      </Container>
    </>
  );
};

export default Projects;
