// Reactstrap
import { Col, Row, Container } from "reactstrap";

// Next
import type { NextPage } from "next";
import Head from "next/head";

// Components
import { Header } from "../components/Header";
import { Background } from "../components/Background";

// Theme
import { useTheme } from "../hooks/useTheme";

// assets
import BackgroundDark from "../assets/background-dark.svg";
import BackgroundLight from "../assets/background-light.svg";

// Styles
import { Wrapper, Title, Subtitle, About, Me } from "./home";

const Home: NextPage = () => {
  const { isDarkTheme } = useTheme();

  return (
    <Background>
      <Head>
        <title>Portfólio | Bruna Oliveira</title>
      </Head>

      <Header />

      <Wrapper>
        <Container
          fluid
          style={{
            width: "60%",
          }}
        >
          <Row
            md={12}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Col md={6} sm={12}>
              <Title>Bruna Oliveira</Title>
              <Subtitle>
                <i>&lt;Front-end dev /&gt;</i>
              </Subtitle>
              <About>making a deal with my sanity...</About>
            </Col>

            <Col
              md={6}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Me src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFISNM0rnQAId54geyGA6_xOSqi5VergCNEHtdVz9wNa9u6aXS1FIWkYm_xTmYLQX_BQ&usqp=CAU" />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Background>
  );
};

export default Home;
