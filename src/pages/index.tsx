// Reactstrap
import { Col, Row, Container } from "reactstrap";

// Next
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// hooks
import { useWidth } from "../hooks/useWidth";

// Components
import { Header } from "../components/Header";
import { Background } from "../components/Background";

// assets
import me from "../assets/me.jpg";

// Styles
import { Wrapper, Title, Subtitle, About, Branch, More } from "../styles/home";

const Home: NextPage = () => {
  const { width } = useWidth();

  return (
    <Background>
      <Head>
        <title>Portfólio | Bruna Oliveira</title>
      </Head>

      <Header />

      <Wrapper>
        <Container
          style={
            width <= 500
              ? {
                  textAlign: "center",
                }
              : {}
          }
        >
          <Row md={12}>
            <Col md={6} sm={6}>
              <Title>Bruna Oliveira</Title>
              <Subtitle>
                <i>&lt;Front-end dev /&gt;</i>
              </Subtitle>
              <About>
                <Branch>Web &amp; Mobile Developer.</Branch>
                Here, you&apos;ll find a bit about my workshop! :)
                <More>For more details, access my Github account.</More>
              </About>
            </Col>

            <Col
              md={6}
              sm={6}
              style={{
                display: "grid",
                justifyContent: "center",
              }}
            >
              <Image
                src={me}
                alt="me"
                width={300}
                height={300}
                layout="fixed"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Background>
  );
};

export default Home;
