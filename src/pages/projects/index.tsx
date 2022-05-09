// React
import React from "react";

// Next
import Head from "next/head";

// Components
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { CarouselMobile } from "../../components/Carousel/Mobile";
import { CarouselWeb } from "../../components/Carousel/Web";

// Theme
import { useTheme } from "../../hooks/useTheme";

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
    <Background>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />

      <Container>
        <Content>
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
    </Background>
  );
};

export default Projects;
