// React
import React from "react";

// Rectstrap
import { Row, Col, Container } from "reactstrap";

// Next
import Head from "next/head";

// hooks
import { useWidth } from "../../hooks/useWidth";

// Components
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";

// Icons
import { FiMail } from "react-icons/fi";

// Styles
import { Wrapper, Title, Subtitle, Button, Email, Me, More } from "./styles";

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
                <Subtitle>Let&apos;s discuss</Subtitle>
              </Title>
              <Col md={6}>
                <Button>Start talking</Button>
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
              <Me src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFISNM0rnQAId54geyGA6_xOSqi5VergCNEHtdVz9wNa9u6aXS1FIWkYm_xTmYLQX_BQ&usqp=CAU" />
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
