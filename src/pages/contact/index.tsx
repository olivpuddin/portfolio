// React
import React from "react";

// Rectstrap
import { Row, Col, Container } from "reactstrap";

// Next
import Head from "next/head";
import Link from "next/link";

// hooks
import { useWidth } from "../../hooks/useWidth";

// Components
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";

// Icons
import { FiMail } from "react-icons/fi";

// Styles
import { Wrapper, Title, Subtitle, Button, Email, Me, More } from "../../styles/stylesContact";

const Contact = () => {
  const { width } = useWidth();

  return (
    <Background>
      <Head>
        <title>Contact</title>
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
              <Title>
                Have any <span>project</span> in your mind?
              </Title>
              <Subtitle>Let&apos;s discuss</Subtitle>
              <Col md={6}>
                <Link href="https://www.linkedin.com/in/bruna-oliveira-05682b229/">
                  <Button>Start talking</Button>
                </Link>
              </Col>
            </Col>

            <Col
              md={6}
              sm={6}
              style={{
                display: "grid",
                justifyContent: "center",
              }}
            >
              <Me src="https://imagensemoldes.com.br/wp-content/uploads/2020/10/Escrita-Thank-You-PNG.png" />
              <More>
                <FiMail />
                <Email>brunabzoliv@gmail.com</Email>
              </More>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Background>
  );
};

export default Contact;
